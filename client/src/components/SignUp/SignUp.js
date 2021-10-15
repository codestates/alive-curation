import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Modal,
  ModalWrapper,
  SlideModal,
  SlideModalContents,
  SlideImg,
  SignUpModal,
  Btn,
  Img,
  ModalContents,
  Email,
  Password,
  SignUpBtn,
  Wrapper,
  Name,
  Warning,
  TypeWrapper,
  WarningWrapper,
  Checking,
} from "./SignUp.Styled";
import Logo from "../../images/logo.svg";
import Book from "../../images/book.png";
const SignUp = ({ setShowModal, setJoinModal, joinModal }) => {
  const [passEmail, setPassEmail] = useState(false);
  const [passPassword, setPassPassword] = useState(false);
  const [passPasswordCheck, setPassPasswordCheck] = useState(false);
  const [passName, setPassName] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [name, setName] = useState("");
  let history = useHistory();
  const modalRef = useRef();
  const headerOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const closeJoinModal = (e) => {
    if (modalRef.current === e.target) {
      setJoinModal(false);
    }
  };

  useEffect(() => {
    emailCheck();
    passwordCheck();
    passwordAgainCheck();
    nameCheck();
  }, [email, password, passwordAgain, name]);

  const emailCheck = () => {
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length > 0 && !emailValidation.test(email)) {
      setPassEmail(true);
    } else {
      setPassEmail(false);
    }
  };

  const passwordCheck = () => {
    const passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
    if (password.length > 0 && !passwordValidation.test(password)) {
      setPassPassword(true);
    } else {
      setPassPassword(false);
    }
  };

  const passwordAgainCheck = () => {
    const passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
    if (
      !passwordValidation.test(passwordAgain) &&
      !(passwordAgain === password) &&
      passwordAgain.length > 0
    ) {
      setPassPasswordCheck(true);
    } else {
      setPassPasswordCheck(false);
    }
  };
  const nameCheck = () => {
    const nameValidation = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
    if (name.length > 0 && !nameValidation.test(name)) {
      setPassName(true);
    } else {
      setPassName(false);
    }
  };

  return (
    <Modal>
      <ModalWrapper>
        <SlideModal>
          <SlideModalContents>
            <SlideImg src={Book} />
          </SlideModalContents>
        </SlideModal>
      </ModalWrapper>
      <ModalWrapper>
        <SignUpModal ref={modalRef} onClick={closeJoinModal}>
          <ModalContents>
            <Btn
              onClick={() => {
                setJoinModal(false);
              }}
            >
              &times;
            </Btn>
            <Wrapper>
              <Img src={Logo} />
              <TypeWrapper>
                <Email
                  name="email"
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {passEmail ? (
                  <WarningWrapper>
                    <Warning>올바른 이메일형식을 입력해주세요.</Warning>
                  </WarningWrapper>
                ) : (
                  <WarningWrapper>
                    <Checking></Checking>
                  </WarningWrapper>
                )}
              </TypeWrapper>

              <TypeWrapper>
                <Password
                  name="password"
                  type="password"
                  placeholder="패스워드를 입력해주세요."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passPassword ? (
                  <WarningWrapper>
                    <Warning>대소문자,숫자 포함 8자이상 입력해주세요.</Warning>
                  </WarningWrapper>
                ) : (
                  <WarningWrapper>
                    <Checking></Checking>
                  </WarningWrapper>
                )}
              </TypeWrapper>

              <TypeWrapper>
                <Password
                  name="passwordAgain"
                  type="password"
                  placeholder="패스워드를 다시 한번 입력해주세요."
                  value={passwordAgain}
                  onChange={(e) => setPasswordAgain(e.target.value)}
                />
                {passPasswordCheck ? (
                  <WarningWrapper>
                    <Warning>입력하신 비밀번호와 다릅니다.</Warning>
                  </WarningWrapper>
                ) : (
                  <WarningWrapper>
                    <Checking></Checking>
                  </WarningWrapper>
                )}
              </TypeWrapper>

              <TypeWrapper>
                <Name
                  name="name"
                  type="text"
                  placeholder="닉네임을 입력해주세요."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {passName ? (
                  <WarningWrapper>
                    <Warning>닉네임은 2글자 이상으로 해주세요.</Warning>
                  </WarningWrapper>
                ) : (
                  <WarningWrapper>
                    <Checking></Checking>
                  </WarningWrapper>
                )}
              </TypeWrapper>

              <SignUpBtn
                onClick={() => {
                  return axios
                    .post(
                      "https://localhost:8080/user",
                      {
                        name,
                        email,
                        password,
                      },
                      headerOptions
                    )
                    .then((res) => {
                      if (res.status === 201) {
                        console.log(res);
                      }
                    })
                    .catch((e) => console.log(e));
                }}
              >
                회원가입
              </SignUpBtn>
            </Wrapper>
          </ModalContents>
        </SignUpModal>
      </ModalWrapper>
    </Modal>
  );
};

export default SignUp;
