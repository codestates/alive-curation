const db = require("../db")
const passport = require("passport")

module.exports = {
	signUp: async (req, res) => {
		try {
			const { email, name } = req.body

			const emailRegex =
				/^([\w\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
			if (!emailRegex.test(email)) {
				return res.status(400).send({ code: 400, message: "invalid-email" })
			}

			const userByEmail = await db.getUserByEmail(email)
			if (userByEmail) {
				return res.status(400).send({ code: 409, message: "email-aready-exists" })
			}

			const userByName = await db.getUserByName(name)
			if (userByName) {
				return res.status(400).send({ code: 409, message: "name-aready-exists" })
			}

			await db.addUser({ ...req.body, email, name })
			res.status(200).json({ code: 200, message: "ok" })
		} catch (err) {
			res.status(500).json({ code: 500, message: "failed" })
		}
	},
	signIn: async (req, res, next) => {
		passport.authenticate("local", (err, user, info) => {
			if (err) {
				return next(err)
			}
			if (info) {
				return res.status(400).send({ code: 400, message: info.message })
			}

			return req.login(user, async (loginErr) => {
				try {
					if (loginErr) {
						return next(loginErr)
					}
					const fullUser = await db.getUserByName(user.name)

					return res.json({ code: 200, message: "ok", data: { name: fullUser.name } })
				} catch (err) {
					return next(err)
				}
			})
		})(req, res, next)
	},
}
