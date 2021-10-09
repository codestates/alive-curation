const Posts = require('../models/Posts');
require('dotenv').config();

module.exports = {
  addPosts: async (req, res) => {
    try { 
      const data = req.body
      res.status(200).json({
        "posts_id": "objectId", //수정 
        "posts_title": data.posts_title, 
        "content": data.content,
        "image": data.image,   
        "title": data.title,   
        "author": data.author,
        "message": "comment-created"
      })
      console.log(data)
    } catch (err) {
      console.log(err);
      return res.status(500).send('server error');
    }
  },
  
  getPosts: async (req, res) => {
    const data = req.query
    res.status(200).json({
      "title": "title",
      "author": "string",
      "image": "string",
      "description": "string",
      "posts_id": "number",
      "posts_title": "String",
      "content": "string", 
      "message": "get-book-success", 
    })
  },

  editPosts: async (req, res) => {
    // 글 수정하기
  },

  deletePosts: async (req, res) => {
    // 글 삭제 요청
  },
}