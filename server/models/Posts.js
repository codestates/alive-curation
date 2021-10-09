const mongoose = require('mongoose')
const { Schema } = mongoose;
const { Book } = require('./Book')
const moment = require('moment-timezone')

const postsSchema = new Schema(
  {
	  "posts_id": {
      type: Number
    },
    "posts_title": {
      type: String,
      required: [true, '책 제목을 입력하세요.'] 
    },
    "content": {
      type: String,
      required: [true, '추천 내용을 입력하세요.']
    },
    // "book": {
    //   "id": Book.book_id,
    //   "image": Book.image,
    //   "title": Book.title,
    //   "author": Book.author,
    // },
    "created_at": {
      type: Date,
      default: Date.now()
    },
    "updated_at": {
      type: Date,
      default: Date.now,
    }
  });

postsSchema.methods.dateFormat = function() {
  return moment(this.createAt)
        .tz("Asia/Seoul")
        .format('YYYY년 MM월 DD일, h:mm:ss a') // dateFormat 값을 포맷해서 리턴
}

const Posts = mongoose.model('Posts', postsSchema);
module.exports = { Posts };
