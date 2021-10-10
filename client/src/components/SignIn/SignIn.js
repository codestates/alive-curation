import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import SignUp from "./SignUp";
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
  LoginBtn,
  JoinBtn,
  Line,
  Email2,
  Password2,
} from "./SignIn.Styled";
import Logo from "../../images/logo.svg";
const SignIn = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const [join, setJoin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  if (!showModal) return null;

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {join ? (
        <Modal>
          <ModalWrapper>
            <SlideModal>
              <SlideModalContents>
                <SlideBtn />
              </SlideModalContents>
            </SlideModal>
          </ModalWrapper>
          <ModalWrapper>
            <LoginModal ref={modalRef} onClick={closeModal}>
              <ModalContents>
                <Btn onClick={() => setShowModal((modal) => !modal)}>
                  &times;
                </Btn>
                <Img src={Logo} />
                <Email2
                  name="email"
                  type="text"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => emailChange(e)}
                />
                <Password2
                  name="password"
                  type="password"
                  placeholder="패스워드"
                  value={password}
                  onChange={(e) => passwordChange(e)}
                />
                <LoginBtn
                  onClick={() =>
                    console.log({ email, password }, "Login request")
                  }
                >
                  로그인
                </LoginBtn>
                <Line />
                <JoinBtn onClick={() => setJoin(!join)}>회원가입</JoinBtn>
              </ModalContents>
            </LoginModal>
          </ModalWrapper>
        </Modal>
      ) : (
        <SignUp showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default SignIn;
