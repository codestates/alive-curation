const passport = require("passport")

module.exports = {
	isLoggedIn: (req, res, next) => {
		passport.authenticate("jwt", { session: false }, (err, user) => {
			try {
				if (err || !user) {
					return res.status(401).json({ message: "unauthorized-user" })
				}

				next()
			} catch (err) {
				return res.status(500).json({ message: err })
			}
		})(req, res, next)
	},
	isLoggedOut: (req, res, next) => {
		passport.authenticate("jwt", { session: false }, (err, user) => {
			try {
				if (err || !user) {
					return next()
				}

				res.status(409).json({ email: user.email, message: "already-login" })
			} catch (err) {
				return res.status(500).json({ message: err })
			}
		})(req, res, next)
	},
}
