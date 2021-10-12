const express = require("express")
const {
	signUp,
	signIn,
	signOut,
	deleteUser,
	auth,
	isPasswordValid,
	patchUser,
} = require("../controllers/user.controller")
const { isLoggedIn, isLoggedOut, isAdmin } = require("../lib/middleware")

const router = express.Router()

router.get("/", isLoggedIn, auth)
router.post("/", isLoggedOut, signUp)
router.patch("/", isLoggedIn, patchUser)
router.delete("/", isLoggedIn, deleteUser)

router.post("/signout", isLoggedIn, signOut)

router.post("/signin", isLoggedOut, signIn)

router.post("/password", isLoggedIn, isPasswordValid)

module.exports = router
