import React, { useState, useRef } from "react";
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
const SignIn = ({ setUser, userInfo, setShowModal }) => {
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

  const [failEmail, setFailEmail] = useState(false);
  const [failPassword, setFailPassword] = useState(false);
  const [joinModal, setJoinModal] = useState(false);

  const joinButtonHandler = () => {
    setJoinModal(true);
  };
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const emailChange = (e) => {
    setFailEmail(false);
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setFailPassword(false);
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
                  failEmail={failEmail}
                  name="email"
                  type="text"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => emailChange(e)}
                />
                <Password
                  failPassword={failPassword}
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
                        console.log(res.data);
                        setUser(res.data);
                        setShowModal(false);
                      })
                      .catch(function (err) {
                        if (err.response) {
                          console.log(err.response.data);
                        }
                      });
                  }}
                >
                  로그인
                </LoginBtn>
                <Line />
                <div>
                  <JoinBtn onClick={joinButtonHandler}>회원가입</JoinBtn>
                </div>
                {joinModal ? (
                  <SignUp
                    setShowModal={setShowModal}
                    setJoinModal={setJoinModal}
                    joinModal={joinModal}
                  />
                ) : null}
              </ContentWrapper>
            </ModalContents>
          </LoginModal>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default SignIn;
