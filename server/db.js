const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

if (!process.env.MONGO_URI) {
	console.error("MongoDB connection string is missing!")
	process.exit(1)
}

mongoose
	.connect(process.env.MONGO_URI)
	.then(console.log("MongoDB Connectted!!"))
	.catch((err) => console.error(err))

const User = require("./models/User")
module.exports = {
	getUserById: async (id) => User.findById(id),
	getUserByEmail: async (email) => User.findOne({ email }),
	getUserByName: async (name) => User.findOne({ name }),
	addUser: async (data) => new User(data).save(),
	close: () => mongoose.connection.close(),
}
