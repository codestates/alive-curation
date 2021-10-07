const passport = require("passport")
const localStrategy = require("passport-local")
const bcrypt = require("bcrypt")
const db = require("../../db")

module.exports = () => {
	passport.use(
		"local",
		new localStrategy(
			{
				usernameField: "email",
				passwordField: "password",
			},
			async (email, password, done) => {
				try {
					const user = await db.getUserByEmail(email)
					if (!user) {
						return done(null, false, { message: "invalid-user" })
					}

					const isMatch = await bcrypt.compare(password, user.password)
					if (isMatch) {
						return done(null, user)
					}

					return done(null, false, { message: "invalid-password" })
				} catch (err) {
					return done(err)
				}
			}
		)
	)
}
