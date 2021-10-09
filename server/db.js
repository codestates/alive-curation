const mongoose = require("mongoose")
const { Posts } = require("./models/Posts")

if (!process.env.MONGO_URI) {
	console.error("MongoDB connection string is missing!")
	process.exit(1)
}

mongoose
	.connect(process.env.MONGO_URI)
	.then(console.log("MongoDB Connectted!!"))
	.catch((err) => console.error(err))

const User = require("./models/User")

// seed user data (if nacessary)
User.find()
	.then((users) => {
		if (users.length) return

		new User({
			name: "손연주",
			email: "sonyeonju7@gmail.com",
			password: "test1234",
		}).save()

		new User({
			name: "임훈",
			email: "load1999@gmail.com",
			password: "test1234",
		}).save()

		new User({
			name: "최동현",
			email: "memoji1236@gmail.com",
			password: "test1234",
		}).save()

		new User({
			name: "한성민",
			email: "tmpks3@gmail.com",
			password: "test1234",
		}).save()
	})
	.catch((err) => console.error(err))

module.exports = {
	getUserById: async (id) => User.findById(id),
	getUserByEmail: async (email) => User.findOne({ email }),
	getUserByName: async (name) => User.findOne({ name }),
	addUser: async (data) => new User(data).save(),
	deleteUser: async (_id) => User.deleteOne(_id),
	close: () => mongoose.connection.close(),
}
