const app = require("../app")
const request = require("supertest")
const bcrypt = require("bcrypt")
const https = require("https")
const db = require("../db")
const mongoose = require("mongoose")

const server = request(app)

const userData = {
	email: "test@test.com",
	name: "test",
	password: "Test123@",
}

require("dotenv").config()

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

describe("🌦  Alive Curation", () => {
	beforeAll(async () => {
		await mongoose
			.connect(process.env.MONGO_URI_TEST, { useNewUrlParser: true, useUnifiedTopology: true })
			.then(() => console.log("몽고디비 연결완료"))
			.catch((err) => console.error(err))
	})

	describe("🛑 서버환경", () => {
		it("HTTPS 프로토콜을 사용해야 합니다.", () => {
			expect(app instanceof https.Server).toBe(true)
		})
	})
	describe("🛑 User 컨트롤러", () => {
		let cookies = ""
		describe("🎬 POST /user 회원가입", () => {
			it("회원가입 요청시 전달받은 데이터가 유효성 검사에 통과되어 유저가 생성된 경우, 유저정보와 'user-created' 상태코드 201 이 전송되어야 합니다", async () => {
				const res = await server.post("/user").send({
					email: userData.email,
					name: userData.name,
					password: userData.password,
				})
				expect(res.status).toBe(201)
				expect(res.body.name).toBe("test")
				expect(res.body.message).toBe("user-created")
			})

			it("회원가입 요청시 전달받은 이메일의 유효성 검사에 실패하는 경우, invalid-email' 메세지와 상태코드 400 이 전송되어야 합니다", async () => {
				const res = await server.post("/user").send({
					email: "wrongdata",
					name: userData.name,
					password: userData.password,
				})
				expect(res.status).toBe(400)
				expect(res.body.message).toBe("invalid-email")
			})

			it("회원가입 요청시 전달받은 비밀번호의 유효성 검사에 실패하는 경우, 'invalid-password' 메세지와 상태코드 400 이 전송되어야 합니다", async () => {
				const res = await server.post("/user").send({
					email: "test1@gmail.com",
					name: "test1",
					password: "test123",
				})
				expect(res.status).toBe(400)
				expect(res.body.message).toBe("invalid-password")
			})

			it("회원가입 요청시 전달받은 이름의 유효성 검사에 실패하는 경우, 'invalid-name' 메세지와 상태코드 400 이 전송되어야 합니다", async () => {
				const res = await server.post("/user").send({
					email: "test1@gmail.com",
					name: "t",
					password: userData.password,
				})
				expect(res.status).toBe(400)
				expect(res.body.message).toBe("invalid-name")
			})

			it("회원가입 요청시 전달받은 이메일이 이미 존재하는 경우, 전송받은 이메일과 'email-aready-exists' 메세지, 상태코드 409 가 전송되어야 합니다", async () => {
				const res = await server.post("/user").send({
					email: userData.email,
					name: userData.name,
					password: userData.password,
				})
				expect(res.status).toBe(409)
				expect(res.body.email).toBe(userData.email)
				expect(res.body.message).toBe("email-aready-exists")
			})

			it("회원가입 요청시 전달받은 이름이 이미 존재하는 경우, 전송받은 이름과 'name-aready-exists' 메세지, 상태코드 409 가 전송되어야 합니다", async () => {
				const res = await server.post("/user").send({
					email: "test1@gmail.com",
					name: userData.name,
					password: userData.password,
				})
				expect(res.status).toBe(409)
				expect(res.body.name).toBe("test")
				expect(res.body.message).toBe("name-aready-exists")
			})
		})
		describe("🎬 POST /user/signin 로그인", () => {
			it("로그인 요청시 전달받은 이메일, 패스워드가 데이터베이스와 일치하는 경우, 유저정보와 'user-created' 메세지, 상태코드 201 이 전송되어야 합니다", async () => {
				const res = await server.post("/user/signin").send({
					email: userData.email,
					password: userData.password,
				})
				cookies = res.header["set-cookie"][0]
				expect(res.status).toBe(200)
				expect(res.body.email).toBe(userData.email)
				expect(res.body.name).toBe("test")
				expect(res.body.message).toBe("login-successfully")
			})

			it("로그인 성공시 쿠키에 JWT 토큰을 전달받아야 합니다.", async () => {
				expect(cookies.includes("jwt")).toBe(true)
				expect(typeof cookies).toBe("string")
			})

			it("로그인 요청시 전달받은 이메일의 유효성 검사에 실패하는 경우, 'invalid-email' 메세지와 상태코드 400 이 전송되어야 합니다", async () => {
				const res = await server.post("/user/signin").send({
					email: "wrondata",
					password: userData.password,
				})
				expect(res.status).toBe(400)
				expect(res.body.message).toBe("invalid-email")
			})

			it("로그인 요청시 전달받은 이메일이 데이터베이스와 일치하는 않는 경우, 'invalid-user' 메세지와 상태코드 400 이 전송되어야 합니다", async () => {
				const res = await server.post("/user/signin").send({
					email: "wrong@email.com",
					password: userData.password,
				})
				expect(res.status).toBe(400)
				expect(res.body.message).toBe("invalid-user")
			})

			it("로그인 요청시 전달받은 패스워드가 데이터베이스와 일치하는 않는 경우, 'invalid-password' 메세지와 상태코드 401 이 전송되어야 합니다", async () => {
				const res = await server.post("/user/signin").send({
					email: userData.email,
					password: "WrongPassword!",
				})
				expect(res.status).toBe(401)
				expect(res.body.message).toBe("invalid-password")
			})

			it("로그인 요청시 이미 로그인 되어있는 경우, 이메일과 'already-login' 메세지와 상태코드 409 가 전송되어야 합니다", async () => {
				const res = await server.post("/user/signin").set("cookie", cookies).send({
					email: userData.email,
					password: "WrongPassword!",
				})
				expect(res.status).toBe(409)
				expect(res.body.message).toBe("already-login")
			})
		})

		describe("🎬 GET /user 유저정보 요청", () => {
			it("유저정보 요청시 졍샹젹으로 로그인이 되어있는 경우, 유저정보와 'get-userinfo-successfully' 메세지, 상태코드 200 이 전송되어야 합니다", async () => {
				const res = await server.get("/user").set("cookie", cookies).send()
				expect(res.body.email).toBe(userData.email)
				expect(res.body.name).toBe(userData.name)
				expect(res.body.message).toBe("get-userinfo-successfully")
				expect(res.status).toBe(200)
			})
			it("유저정보 요청시 로그인이 되어있지 않은 경우, 'unauthorized-user' 메세지와 상태코드 401 가 전송되어야 합니다", async () => {
				const res = await server.get("/user").set("cookie", "wrongcookie").send()
				expect(res.body.message).toBe("unauthorized-user")
				expect(res.status).toBe(401)
			})
		})

		describe("🎬 PATCH /user 비밀번호 변경 요청", () => {
			it("비밀번호 변경 요청시 로그인이 되어있지 않은 경우, 'unauthorized-user' 메세지와 상태코드 401 가 전송되어야 합니다", async () => {
				const res = await server.patch("/user").set("cookie", "wrongcookie").send()
				expect(res.body.message).toBe("unauthorized-user")
				expect(res.status).toBe(401)
			})

			it("비밀번호 변경 요청시 졍샹젹으로 로그인이 되어있고 변경 비밀번호가 기존 비밀번호와 같은 경우, 'same-password' 메세지, 상태코드 409 가 전송되어야 합니다", async () => {
				const { password } = userData
				const res = await server.patch("/user").set("cookie", cookies).send({ password, changePassword: password })
				expect(res.body.message).toBe("same-password")
				expect(res.status).toBe(409)
			})

            it("비밀번호 변경 요청시 졍샹젹으로 로그인이 되어있지만 변경 비밀번호가 없을 경우, 'invalid-change-password' 메세지, 상태코드 400 가 전송되어야 합니다", async () => {
				const { password } = userData
				const res = await server.patch("/user").set("cookie", cookies).send({ password, changePassword: null })
				expect(res.body.message).toBe("invalid-change-password")
				expect(res.status).toBe(400)
			})


			it("비밀번호 변경 요청시 졍샹젹으로 로그인이 되어있고 변경 비밀번호가 유효성 검사에 실패할 경우, 'invalid-change-password' 메세지, 상태코드 400 가 전송되어야 합니다", async () => {
				const { password } = userData
				const res = await server.patch("/user").set("cookie", cookies).send({ password, changePassword: "wrongpassword" })
				expect(res.body.message).toBe("invalid-change-password")
				expect(res.status).toBe(400)
			})

			it("비밀번호 변경 요청시 변경에 성공한 경우, 'patch-successfully' 메세지, 상태코드 200 이 전송되어야 합니다", async () => {
				const { password } = userData
				const changePassword = "Test1234!!"
				const res = await server.patch("/user").set("cookie", cookies).send({ password, changePassword })
				const user = await db.getUserByEmail(userData.email)
				const isMatch = await bcrypt.compare(changePassword, user.password)
				expect(isMatch).toBe(true)
				expect(res.body.message).toBe("patch-successfully")
				expect(res.status).toBe(200)
			})
		})

		describe("🎬 POST /user/signout 로그아웃", () => {
			it("로그아웃 요청시 정상적으로 로그인이 되어있는 경우, 로그아웃 후 쿠키를 지우고 'logout-successfully' 메세지와 상태코드 200 이 전송되어야 합니다", async () => {
				const res = await server.post("/user/signout").set("cookie", cookies).send()
				expect(res.status).toBe(200)
				expect(res.body.message).toBe("logout-successfully")
			})
			it("로그아웃 요청시 로그인이 되어있지 않은 경우, 'unauthorized-user' 메세지와 상태코드 401 가 전송되어야 합니다", async () => {
				const res = await server.post("/user/signout").set("cookie", "wrongcookie").send()
				expect(res.body.message).toBe("unauthorized-user")
				expect(res.status).toBe(401)
			})
		})

		describe("🎬 DELETE /user 유저삭제", () => {
			it("유저삭제 요청시 정상적으로 로그인이 되어있는 경우, 삭제 후 상태코드 204 가 전송되어야 합니다", async () => {
				const res = await server.delete("/user").set("cookie", cookies).send()
				const user = await db.getUserByEmail(userData.email)
				expect(user).toBe(null)
				expect(res.status).toBe(204)
			})

			it("유저삭제 요청시 로그인이 되어있지 않은 경우, 'unauthorized-user' 메세지와 상태코드 401 이 전송되어야 합니다", async () => {
				const res = await server.delete("/user").set("cookie", cookies).send()
				expect(res.status).toBe(401)
				expect(res.body.message).toBe("unauthorized-user")
			})
		})
	})
	afterAll(async () => {
		db.close()
	})
})
