import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
const Landing = ({ userInfo, setUserInfo, getDataHandler }) => {
  const headerOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const activeModal = () => {
    setShowModal((open) => !open);
  };
  const activeJoinModal = () => {
    setJoinModal((open) => !open);
  };
  const logoutHandler = () => {
    axios
      .post("https://localhost:8080/user/signout", {}, headerOptions)
      .then((res) => {
        if (Object.keys(userInfo).length === 0) {
          window.localStorage.clear();
          history.push("/");
        } else {
          window.localStorage.removeItem("user");
          setUserInfo({});
          history.push("/");
        }
      })
      .catch(({ response }) => console.log(response));
  };
  const myPageHandler = () => {
    window.localStorage.getItem("user")
      ? history.push("/mypage")
      : history.push("/");
  };
  return (
    <>
      <div>
        <div>여기는 랜딩페이지 입니다.</div>
        <div>
          <button onClick={activeModal}>로그인</button>

          {showModal ? (
            <SignIn
              userInfo={userInfo}
              getDataHandler={getDataHandler}
              setUserInfo={setUserInfo}
              showModal={showModal}
              setShowModal={setShowModal}
              joinModal={joinModal}
              setJoinModal={setJoinModal}
            />
          ) : null}
        </div>
        <div>
          <button onClick={activeJoinModal}>회원가입</button>
          {joinModal ? (
            <SignUp
              setUserInfo={setUserInfo}
              joinModal={joinModal}
              setJoinModal={setJoinModal}
            />
          ) : null}
        </div>
        <div>
          <Link to="write">
            <button>글쓰기</button>
          </Link>
        </div>
        <button onClick={myPageHandler}>마이페이지</button>
        <div>
          <button onClick={logoutHandler}>로그아웃</button>
        </div>
      </div>
    </>
  );
};

export default Landing;
