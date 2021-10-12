import React, { useState, useRef, useEffect } from "react";
import { useHistory, Switch, Route, Link } from "react-router-dom";
import { Cookies } from "react-cookie";
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
  Email2,
  Password2,
  SlideImg,
} from "./SignIn.Styled";
import Logo from "../../images/logo.svg";
import Ad from "../../images/recommend.png";
axios.defaults.withCredentials = true;
const SignIn = ({
  setIsLogin,
  setUserInfo,
  showModal,
  setShowModal,
  joinModal,
  setJoinModal,
}) => {
  const modalRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  let history = useHistory();
  useEffect(() => {
    setUserInfo(data);
  }, [data]);
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
                onClick={() => {
                  if (window.localStorage.getItem("userInfo") === null)
                    return axios
                      .post(
                        "https://localhost:8080/user/signin",
                        {
                          email,
                          password,
                        },
                        {
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                          },
                          withCredentials: true,
                        }
                      )
                      .then((res) => {
                        if (res.status === 200) {
                          window.localStorage.setItem(
                            "userInfo"
                          );
                          setData(res.data);
                          setIsLogin(true);
                          history.push("/mypage");
                        } else if (res.status === 400) {
                          setIsLogin(false);
                        }
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
                    setIsLogin(true);
                    setJoinModal(true);
                  }}
                >
                  회원가입
                </JoinBtn>
                {joinModal ? <SignUp /> : null}
              </div>
            </ModalContents>
          </LoginModal>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default SignIn;
