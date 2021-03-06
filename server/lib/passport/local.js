const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

const { emailRegex, passwordRegex } = require("../regex")
const db = require("../../db")

const config = {
	usernameField: "email",
	passwordField: "password",
}

const verify = async (email, password, done) => {
	try {
		if (!emailRegex(email)) {
			return done(null, false, { code: 400, message: "invalid-email" })
		}

		const user = await db.getUserByEmail(email)
		if (!user) {
			return done(null, false, { code: 400, message: "invalid-user" })
		}

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) {
			return done(null, false, { code: 401, message: "invalid-password" })
		}

		const { _id, name, role, thumbnail } = user
		return done(null, { _id, email, name, role, thumbnail })
	} catch (err) {
		return done(err)
	}
}

module.exports = () => {
	passport.use("local", new LocalStrategy(config, verify))
}
