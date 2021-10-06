const mongoose = require("mongoose")

if (!process.env.MONGO_URI) {
	console.error("MongoDB connection string is missing!")
	process.exit(1)
}

mongoose
	.connect(process.env.MONGO_URI)
	.then(console.log("MongoDB Connected!!"))
	.catch((err) => console.error(err))

module.exports = {
	// db 관련 함수 작성
}
