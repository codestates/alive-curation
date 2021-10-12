const express = require("express")
const { signUp, signIn, signOut, deleteUser, auth } = require("../controllers/user")
const { isLoggedIn, isLoggedOut } = require("../lib/middleware")

const router = express.Router()

router.get("/", isLoggedIn, auth)
router.post("/", isLoggedOut, signUp)
router.post("/signout", isLoggedIn, signOut)
router.post("/signin", isLoggedOut, signIn)
router.delete("/", isLoggedIn, deleteUser)

module.exports = router