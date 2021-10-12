const Book = require('../models/Book');
require('dotenv').config();

module.exports = {
  getPostsData: async (req, res) => {
    // query = /book?title
    console.log(req.params)
  }
}