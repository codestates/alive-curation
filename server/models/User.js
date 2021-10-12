const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
	email: {
		type: String,
		trim: true,
		unique: 1,
	},
	password: {
		type: String,
		minLength: 8,
		maxLength: 16,
	},
	name: {
		type: String,
		minLength: 2,
		maxLength: 16,
	},
	role: {
		type: Number,
		default: 0,
	},
	thumbnail: {
		type: String,
		default: "https://www.svgrepo.com/show/106358/avatar.svg",
	},
})

userSchema.pre("save", async function (next) {
	try {
		const user = this
		const hashedPasssword = await bcrypt.hash(user.password, 12)
		user.password = hashedPasssword
		next()
	} catch (err) {
		next(err)
	}
})

const User = mongoose.model("User", userSchema)

module.exports = User
