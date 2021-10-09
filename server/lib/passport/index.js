const passport = require("passport")
const db = require("../../db")
const local = require("./local")
const jwt = require("./jwt")

module.exports = () => {
	passport.serializeUser((user, done) => done(null, user._id))
	passport.deserializeUser((id, done) => {
		db.getUserById(id)
			.then((user) => done(null, user))
			.catch((err) => done(err))
	})
	local()
	jwt()
}
