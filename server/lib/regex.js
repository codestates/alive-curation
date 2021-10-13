/*eslint-disable no-useless-escape*/
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/
const nameValidation = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/
/*eslint-enable no-useless-escape*/

const emailRegex = (email) => emailValidation.test(email)
const passwordRegex = (password) => passwordValidation.test(password)
const nameRegex = (name) => nameValidation.test(name)
const validator = (email, password, name) => {
	if (!email || !emailRegex(email)) {
		return { code: 400, message: "invalid-email" }
	}

	if (!password || !passwordRegex(password)) {
		return { code: 400, message: "invalid-password" }
	}

	if (!name || !nameRegex(name)) {
		return { code: 400, message: "invalid-name" }
	}
	return false
}

module.exports = {
	emailRegex,
	passwordRegex,
	nameRegex,
	validator
}
