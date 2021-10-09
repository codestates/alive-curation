const jwt = require("jsonwebtoken")
const passport = require("passport")

const db = require("../db")
require("dotenv").config()

module.exports = {
	signUp: async (req, res) => {
		try {
			const { email, name, password } = req.body
			if (!email || !name || !password) {
				return res.status(400).send({ message: "invalid-data" })
			}

			/*eslint-disable no-useless-escape*/
			const regex =
				/^([\w\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
			/*eslint-enable no-useless-escape*/
			if (!regex.test(email)) {
				return res.status(400).send({ email, message: "invalid-email" })
			}

			const userByEmail = await db.getUserByEmail(email)
			if (userByEmail) {
				return res.status(400).send({ email, message: "email-aready-exists" })
			}

			const userByName = await db.getUserByName(name)
			if (userByName) {
				return res.status(400).send({ name, message: "name-aready-exists" })
			}

			await db.addUser(req.body)
			res.status(201).json({ name, message: "user-created" })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	signIn: async (req, res, next) => {
		passport.authenticate("local", async (err, user, info) => {
			if (err || !user) {
				return info.message === "Missing credentials"
					? res.status(400).json({ message: "invalid-data" })
					: res.status(info.code).json({ message: info.message })
			}

			try {
				const role = user.role ? "admin" : "user"
				const { _id, name, email, thumbnail } = user
				const token = await jwt.sign({ _id, name, email, role }, process.env.JWT_SECRET, { expiresIn: "30m" })

				res.cookie("jwt", token, { httpOnly: true, sameSite: "None" })
				return res.json({ _id, email, name, role, thumbnail, message: "login-success" })
			} catch (err) {
				res.status(500).json({ message: err.message })
			}
		})(req, res, next)
	},
	deleteUser: async (req, res) => {
		await db.deleteUser(req._id)
		res.clearCookie("jwt", { httpOnly: true, sameSite: "None" })
		res.status(204).json({ message: "user-deleted" })
	},
	signOut: async (req, res) => {
		res.clearCookie("jwt", { httpOnly: true, sameSite: "None" })
		return res.status(200).json({ message: "logout-success" })
	},
	auth: async (req, res) => {
		const userInfo = await db.getUserById(req._id)
		delete userInfo.password
		return res.status(200).json({ userInfo, message: "get-userinfo-success" })
	},
}
