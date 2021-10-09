import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
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
  JoinBtn,
  Line,
  Wrapper,
  Name,
} from "./SignIn.Styled";
import Logo from "../../images/logo.svg";
const SignIn = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  // console.log(modalRef);

  const [join, setJoin] = useState(false);
  const [on, setOn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [name, setName] = useState("");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const closeKey = useCallback(
    (e) => {
      if (e.key === "Escape" && on) {
        setOn(false);
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", closeKey);
    return () => document.removeEventListener("keydown", closeKey);
  }, [closeKey]);

  if (!showModal) return null;

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const passwordAgainChange = (e) => {
    setPasswordAgain(e.target.value);
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Modal>
        <ModalWrapper>
          <SlideModal>
            <SlideModalContents>
              <SlideBtn />
            </SlideModalContents>
          </SlideModal>
        </ModalWrapper>
        {join ? (
          <ModalWrapper>
            <LoginModal>
              <ModalContents>
                <Btn onClick={(modal) => setShowModal(!modal)}>&times;</Btn>
                <Wrapper>
                  <Img src={Logo} />
                  <Email
                    name="email"
                    type="text"
                    placeholder="이메일을 입력해주세요."
                    value={email}
                    onChange={(e) => emailChange(e)}
                  />
                  <Password
                    name="password"
                    type="password"
                    placeholder="패스워드를 입력해주세요."
                    value={password}
                    onChange={(e) => passwordChange(e)}
                  />
                  <Password
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
                  <LoginBtn onClick={() => console.log({ email, password })}>
                    회원가입
                  </LoginBtn>
                </Wrapper>
              </ModalContents>
            </LoginModal>
          </ModalWrapper>
        ) : (
          <ModalWrapper>
            <LoginModal ref={modalRef} onClick={closeModal}>
              <ModalContents>
                <Btn onClick={() => setShowModal((modal) => !modal)}>
                  &times;
                </Btn>
                <Img src={Logo} />
                <Email
                  join={join}
                  name="email"
                  type="text"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => emailChange(e)}
                />
                <Password
                  join={join}
                  name="password"
                  type="password"
                  placeholder="패스워드"
                  value={password}
                  onChange={(e) => passwordChange(e)}
                />
                <Link to="/">
                  <LoginBtn
                    onClick={() =>
                      console.log({ email, password }, "Login request")
                    }
                  >
                    로그인
                  </LoginBtn>
                </Link>
                <Line />
                <JoinBtn onClick={() => setJoin(!join)}>회원가입</JoinBtn>
              </ModalContents>
            </LoginModal>
          </ModalWrapper>
        )}
      </Modal>
    </>
  );
};

export default SignIn;
