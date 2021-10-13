const jwt = require("jsonwebtoken")
const passport = require("passport")
const { validator, passwordRegex } = require("../lib/regex")
const bcrypt = require("bcrypt")
const db = require("../db")
require("dotenv").config()

module.exports = {
	signUp: async (req, res) => {
		try {
			const { email, name, password } = req.body

			const isInvalid = validator(email, password, name)
			if (isInvalid) {
				return res.status(isInvalid.code).json({ message: isInvalid.message })
			}

			const userByEmail = await db.getUserByEmail(email)
			if (userByEmail) {
				return res.status(409).send({ email, message: "email-aready-exists" })
			}

			const userByName = await db.getUserByName(name)
			if (userByName) {
				return res.status(409).send({ name, message: "name-aready-exists" })
			}

			await db.addUser({ email, name, password })
			res.status(201).json({ name, message: "user-created" })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	signIn: async (req, res, next) => {
		passport.authenticate("local", async (err, user, info) => {
			try {
				if (err || !user) {
					return info.message === "Missing credentials"
						? res.status(400).json({ message: "invalid-data" })
						: res.status(info.code).json({ message: info.message })
				}

				const role = user.role ? "admin" : "user"
				const { _id, name, email, thumbnail } = user
				const token = await jwt.sign({ _id, name, email, role }, process.env.JWT_SECRET, { expiresIn: "30m" })

				res.cookie("jwt", token, { httpOnly: true, sameSite: "None", secure: true })
				return res.json({ _id, email, name, role, thumbnail, message: "login-successfully" })
			} catch (err) {
				res.status(500).json({ message: err.message })
			}
		})(req, res, next)
	},
	deleteUser: async (req, res) => {
		await db.deleteUser(req.userInfo._id)

		res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true })
		res.status(204).json({})
	},
	signOut: async (req, res) => {
		res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true })
		return res.status(200).json({ message: "logout-successfully" })
	},
	auth: async (req, res) => {
		const { userInfo } = req
		const { thumbnail } = await db.getUserById(userInfo._id)
		const role = userInfo.role ? "admin" : "user"

		return res.status(200).json({ ...userInfo, thumbnail, role, message: "get-userinfo-successfully" })
	},
	patchUser: async (req, res) => {
		const { changePassword } = req.body
		const { _id, password } = await db.getUserByName(req.userInfo.name)

		if (!changePassword || !passwordRegex(changePassword)) {
			return res.status(400).json({ message: "invalid-change-password" })
		}

		const isMatch = await bcrypt.compare(changePassword, password)

		if (isMatch) {
			return res.status(409).json({ message: "same-password" })
		}

		const hashedPasssword = await bcrypt.hash(changePassword, 12)
		await db.updatePassword(_id, hashedPasssword)

		res.status(200).json({ message: "patch-successfully" })
	},
}
