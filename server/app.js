const express = require("express")
const cors = require("cors")
const fs = require("fs")
const https = require("https")
const dotenv = require("dotenv")
const morgan = require("morgan")
const hpp = require("hpp")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const userRouter = require("./routes/user.route")
const passportConfig = require("./lib/passport")

dotenv.config()

require("./db")
const app = express()
const dev = process.env.NODE_ENV !== "production"

if (dev) {
	app.use(morgan("dev"))
	app.use(cors({ origin: true, credentials: true }))
} else {
	app.use(morgan("combined"))
	app.use(hpp())
	app.use(helmet())
	app.use(cors({ origin: "site-url", credentials: true }))
}
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECURE))
app.use(passport.initialize())
passportConfig()

app.use("/user", userRouter)

app.use(require("./routes/posts.route"))

app.get("/", (req, res) => {
	res.status(200).json({ code: 200, message: "sever is ready!" })
})

const PORT = dev ? 8080 : process.env.PORT

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
	const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8")
	const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8")
	const credentials = { key: privateKey, cert: certificate }

	const server = https.createServer(credentials, app)
	server.listen(PORT, () => console.log(`https sever is ready on port: ${PORT}, terminate to Control + C.`))
} else {
	app.listen(PORT, () => console.log(`http sever is ready on port: ${PORT}, terminate to Control + C.`))
}
