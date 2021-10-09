const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const morgan = require("morgan")
const hpp = require("hpp")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const userRouter = require("./routes/user")
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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECURE))
app.use(passport.initialize())
passportConfig()

app.use("/user", userRouter)

app.get("/", (req, res) => {
	res.status(200).json({ code: 200, message: "sever is ready!" })
})

const port = dev ? 8080 : process.env.PORT
app.listen(port, () => console.log(`sever is ready on port: ${port}, terminate to Control + C.`))
