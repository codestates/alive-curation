const { getPostsData } = require('../controllers/book')
const express = require('express');
const router = express.Router();

// 책 제목으로 책 정보 검색
router.get('/book/:title', getPostsData);

module.exports = router;