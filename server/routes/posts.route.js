const { addPosts, getAllPosts, getPosts, editPosts, deletePosts } = require('../controllers/posts.controller')
const express = require('express');
const router = express.Router();

router.post('/posts', addPosts);
router.get('/posts', getAllPosts);
router.get('/posts/:post_id', getPosts);
router.delete('/posts/:post_id', deletePosts);
router.patch('/posts/:post_id', editPosts);

module.exports = router;