import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SignUp from "../SignUp/SignUp";
import {
  Modal,
  ModalWrapper,
  SlideModal,
  SlideModalContents,
  LoginModal,
  Btn,
  Img,
  ModalContents,
  LoginBtn,
  JoinBtn,
  Line,
  Email,
  Password,
  SlideImg,
  ContentWrapper,
} from "./SignIn.Styled";
import Logo from "../../images/logo.svg";
import Ad from "../../images/recommend.png";
// axios.defaults.withCredentials = true;
const SignIn = ({
  userInfo,
  showModal,
  setShowModal,
  joinModal,
  setJoinModal,
  getDataHandler,
}) => {
  const headerOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const modalRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Modal>
        <ModalWrapper>
          <SlideModal>
            <SlideModalContents>
              <SlideImg src={Ad} />
            </SlideModalContents>
          </SlideModal>
        </ModalWrapper>
        <ModalWrapper>
          <LoginModal ref={modalRef} onClick={closeModal}>
            <ModalContents>
              <Btn onClick={() => setShowModal((modal) => !modal)}>&times;</Btn>
              <ContentWrapper>
                <Img src={Logo} />
                <Email
                  name="email"
                  type="text"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => emailChange(e)}
                />
                <Password
                  name="password"
                  type="password"
                  placeholder="패스워드"
                  value={password}
                  onChange={(e) => passwordChange(e)}
                />
                <LoginBtn
                  onClick={() => {
                    return axios
                      .post(
                        "https://localhost:8080/user/signin",
                        {
                          email,
                          password,
                        },
                        headerOptions
                      )
                      .then((res) => {
                        window.localStorage.setItem(
                          "user",
                          JSON.stringify(res.data)
                        );
                        getDataHandler(res.data);
                        history.push("/mypage");
                      })
                      .catch(() => {
                        console.log("error");
                      });
                  }}
                >
                  로그인
                </LoginBtn>
                <Line />
                <div>
                  <JoinBtn
                    onClick={() => {
                      setShowModal(false);
                      setJoinModal(true);
                    }}
                  >
                    회원가입
                  </JoinBtn>
                  {joinModal ? <SignUp userInfo={userInfo} /> : null}
                </div>
              </ContentWrapper>
            </ModalContents>
          </LoginModal>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default SignIn;
