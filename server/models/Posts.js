const mongoose = require("mongoose")
const { Schema } = mongoose
const moment = require("moment-timezone")

const postsSchema = new Schema({
	title: {
		type: String,
		required: [true, "책 제목을 입력하세요."],
	},
	image: {
		type: String,
		required: [true, "책 사진이 필요합니다."],
	},
	author: {
		type: String,
		required: [true, "작가를 입력하세요."],
	},
	description: {
		type: String,
		required: [true, "책 설명을 입력하세요."],
	},
	content: {
		type: String,
		required: [true, "서평을 입력하세요."],
	},
	created_at: {
		type: Date,
		default: Date.now(),
	},
	updated_at: {
		type: Date,
		default: Date.now(),
	},
})

postsSchema.methods.dateFormat = function () {
	return moment(this.createAt).tz("Asia/Seoul").format("YYYY년 MM월 DD일, h:mm:ss a")
}

const Posts = mongoose.model("Posts", postsSchema)
module.exports = { Posts }
