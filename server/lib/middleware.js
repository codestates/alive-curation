const passport = require("passport")

module.exports = {
	isLoggedIn: (req, res, next) => {
		passport.authenticate("jwt", { session: false }, (err, user) => {
				if (err || !user) {
					return res.status(401).json({ message: "unauthorized-user" })
				}

				next()
		})(req, res, next)
	},
	isLoggedOut: (req, res, next) => {
		passport.authenticate("jwt", { session: false }, (err, user) => {
				if (err || !user) {
					return next()
				}

				res.status(409).json({ email: user.email, message: "already-login" })
		})(req, res, next)
	},
}
