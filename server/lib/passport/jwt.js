const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy
const db = require("../../db")

require("dotenv").config()

const cookieExtractor = (req) => (req && req.cookies.jwt ? req.cookies.jwt : null)

const config = {
	jwtFromRequest: cookieExtractor,
	secretOrKey: process.env.JWT_SECRET,
}

const verify = async (jwtPayload, done) => {
	try {
		const user = await db.getUserById(jwtPayload._id)

		if (!user) {
			return done(null, false)
		}

		const { _id, name, email } = user
		return done(null, { _id, name, email })
	} catch (err) {
		return done(err)
	}
}

module.exports = () => {
	passport.use("jwt", new JwtStrategy(config, verify))
}
