const express = require("express")
const { addPosts, getAllPosts, getPosts, editPosts, deletePosts } = require("../controllers/posts.controller")
const { isLoggedIn, isAdmin } = require("../lib/middleware")

const router = express.Router()

router.post("/posts", isLoggedIn, isAdmin, addPosts)
router.get("/posts", getAllPosts)
router.get("/posts/:post_id", getPosts)
router.delete("/posts/:post_id", isLoggedIn, isAdmin, deletePosts)
router.patch("/posts/:post_id", isLoggedIn, isAdmin, editPosts)

module.exports = router
