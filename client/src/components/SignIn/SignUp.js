import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalWrapper,
  SlideModal,
  SlideModalContents,
  SlideBtn,
  LoginModal,
  Btn,
  Img,
  ModalContents,
  Email,
  Password,
  LoginBtn,
  Wrapper,
  Name,
  Img2,
} from "./SignUp.Styled";
import Logo from "../../images/logo.svg";
import Check from "../../images/check.svg";
const SignUp = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [passEmail, setPassEmail] = useState(false);
  const [passPassword, setPassPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [name, setName] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
    let emailValidation =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailValidation.test(email)) {
      setPassEmail(true);
    } else {
      setPassEmail(false);
    }
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
    let passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
    if (passwordValidation.test(password)) {
      setPassPassword(true);
    } else if (!passwordValidation.test(password)) {
      setPassPassword(false);
    }
    if (passwordValidation.test(passwordAgain) && passwordAgain === password) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  };
  const passwordAgainChange = (e) => {
    setPasswordAgain(e.target.value);
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Modal>
      <ModalWrapper>
        <SlideModal>
          <SlideModalContents>
            <SlideBtn />
          </SlideModalContents>
        </SlideModal>
      </ModalWrapper>
      <ModalWrapper>
        <LoginModal>
          <ModalContents>
            <Btn onClick={(modal) => setShowModal(!modal)}>&times;</Btn>
            <Wrapper>
              <Img src={Logo} />
              <Email
                pass={passEmail}
                name="email"
                type="text"
                placeholder="이메일을 입력해주세요."
                value={email}
                onChange={(e) => emailChange(e)}
              />
              <Password
                pass={passPassword}
                name="password"
                type="password"
                placeholder="패스워드를 입력해주세요."
                value={password}
                onChange={(e) => passwordChange(e)}
              />
              <Password
                pass={passwordCheck}
                name="passwordAgain"
                type="password"
                placeholder="패스워드를 다시 한번 입력해주세요."
                value={passwordAgain}
                onChange={(e) => passwordAgainChange(e)}
              />
              <Name
                name="name"
                type="text"
                placeholder="닉네임을 입력해주세요."
                value={name}
                onChange={(e) => nameChange(e)}
              />
              <LoginBtn
                onClick={() => {
                  return axios
                    .post("http://localhost:8080/user", {
                      name: name,
                      email: email,
                      password: password,
                    })
                    .then((res) => {
                      if (res.status === 201) {
                        console.log("회원가입 성공~!!");
                      }
                    });
                }}
              >
                회원가입
              </LoginBtn>
            </Wrapper>
          </ModalContents>
        </LoginModal>
      </ModalWrapper>
    </Modal>
  );
};

export default SignUp;
