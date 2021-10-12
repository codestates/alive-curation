const { addPosts, getPosts, editPosts, deletePosts } = require('../controllers/posts')
const express = require('express');
const router = express.Router();

router.post('/posts', addPosts);
router.get('/posts/:post_id', getPosts);
router.get('/posts/:post_id', editPosts);
router.delete('/posts/:post_id', deletePosts);

module.exports = router;