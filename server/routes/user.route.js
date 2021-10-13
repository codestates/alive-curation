const express = require("express")
const {
	signUp,
	signIn,
	signOut,
	deleteUser,
	auth,

	patchUser,
} = require("../controllers/user.controller")
const { isLoggedIn, isLoggedOut, isPasswordMatch } = require("../lib/middleware")

const router = express.Router()

router.get("/", isLoggedIn, auth)
router.post("/", isLoggedOut, signUp)
router.delete("/", isLoggedIn, deleteUser)

router.patch("/", isLoggedIn, isPasswordMatch, patchUser)
router.post("/signout", isLoggedIn, signOut)

router.post("/signin", isLoggedOut, signIn)

module.exports = router
