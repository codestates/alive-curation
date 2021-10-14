const db = require("../db")
require("dotenv").config()

module.exports = {
	addPosts: async (req, res) => {
		try {
			const { title, image, author, description, content } = req.body
			if (!title || !image || !author || !description || !content) {
				return res.status(401).json({ message: "invalid-data" })
			}
			if (title.length < 2) {
				return res.status(400).json({ title, message: "title-is-too-short" })
			}
			if (content.length < 10) {
				return res.status(400).json({ content, message: "content-is-too-short" })
			}
			const duplicatedBook = await db.getPostsByTitle(title)
			if (duplicatedBook) {
				return res.status(400).json({ message: "book-already-exists" })
			}
			await db.addPosts({ title, image, author, description, content })
			res.status(200).json({
				title,
				image,
				author,
				description,
				content,
				message: "content-created",
			})
		} catch (err) {
			return res.status(500).json({ message: "server-error" })
		}
	},
	getAllPosts: async (req, res) => {
		try {
			const data = await db.getAllPosts()
			if (data.length === 0) {
				return res.status(400).json({ message: "data-not-exists" })
			}
			res.status(200).json({ data })
		} catch (err) {
			res.status(500).json({ message: "server-error" })
		}
	},
	getPosts: async (req, res) => {
		try {
			const post_id = req.params.post_id
			const post = await db.getPostById(post_id)
			if (!post_id) {
				return res.status(404).json({ message: "data-not-found" })
			}
			res.status(200).json({ post, message: "get-posts-successfully" })
		} catch (err) {
			res.status(500).json({ message: "server-error" })
		}
	},
	editPosts: async (req, res) => {
		try {
			const { post_id, content } = req.body
			if (!post_id) {
				return res.status(404).json({ message: "data-not-found" })
			}
			await db.editPosts(post_id, content)
			const editedPosts = await db.getPostById(post_id)
			res.status(200).json({ editedPosts, message: "edit-posts-successfully" })
		} catch (err) {
			res.status(500).json({ message: "server-error" })
		}
	},
	deletePosts: async (req, res) => {
		try {
			const post_id = req.params
			if (!post_id) {
				return res.status(404).json({ message: "data-not-found" })
			}
			await db.deletePosts(post_id)
			res.status(200).json({ message: "delete-posts-}successfully" })
		} catch (err) {
			res.status(500).json({ message: "server-error" })
		}
	},
}
