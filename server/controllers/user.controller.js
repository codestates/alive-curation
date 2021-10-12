const jwt = require("jsonwebtoken")
const passport = require("passport")
const { validator } = require("../lib/regex")
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
				return res.status(400).send({ email, message: "email-aready-exists" })
			}

			const userByName = await db.getUserByName(name)
			if (userByName) {
				return res.status(400).send({ name, message: "name-aready-exists" })
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
		const userInfo = req.userInfo
		const { thumbnail } = await db.getUserById(userInfo._id)
		const role = userInfo.role ? "admin" : "user"

		return res.status(200).json({ ...userInfo, thumbnail, role, message: "get-userinfo-successfully" })
	},
	isPasswordValid: async (req, res) => {
		const user = await db.getUserById(req.userInfo._id)
		const { password } = req.body

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) {
			return res.status(401).json({ message: "invalid-password" })
		}
		res.status(200).json({ message: "password-matches" })
	},
	patchUser: async (req, res) => {
		const { email, name, password } = req.body

		const isInvalid = validator(email, password, name)
		if (isInvalid) {
			return res.status(isInvalid.code).json({ message: isInvalid.message })
		}

		if (req.userInfo.email !== email) {
			const userByEmail = await db.getUserByEmail(email)
			if (userByEmail) {
				return res.status(400).send({ email, message: "email-aready-exists" })
			}
		}

		if (req.userInfo.name !== name) {
			const userByName = await db.getUserByName(name)
			if (userByName) {
				return res.status(400).send({ name, message: "name-aready-exists" })
			}
		}
		const hashedPasssword = await bcrypt.hash(password, 12)
		await db.updateUser(req.userInfo._id, email, hashedPasssword, name)
		const token = await jwt.sign(
			{ _id: req.userInfo._id, name, email, role: req.userInfo.role },
			process.env.JWT_SECRET,
			{
				expiresIn: "30m",
			}
		)
		res.cookie("jwt", token, { httpOnly: true, sameSite: "None", secure: true })
		res.status(200).send({ name, email, message: "patch-successfully" })
	},
}
