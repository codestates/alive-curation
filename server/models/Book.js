const mongoose = require('mongoose')
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    "book_id": { 
      type: Number,
      required: true
    },
    "image": { 
      type: String,
      required: [true, "책 사진이 필요합니다."]
    },
    "title": { 
      type: String,
      required: [true, "책 제목을 입력하세요."]
    },
    "author": { 
      type: String,
      required: [true, "작가를 입력하세요."]
    },
    "description": { 
      type: String,
      required: [true, "책 설명을 입력하세요."]
    },
    "content": {
      type: String,
      required: [true, "추천 내용을 입력하세요."]
    }
  })

const Book = mongoose.model('Book', bookSchema);
module.exports = { Book };