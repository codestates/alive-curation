import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
const Landing = ({ isLogin, userInfo, setUserInfo, setIsLogin }) => {
  console.log(isLogin);
  console.log(userInfo);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const activeModal = () => {
    setShowModal((open) => !open);
  };
  const activeJoinModal = () => {
    setJoinModal((open) => !open);
  };

  const myPageHandler = () => {
    window.localStorage.getItem("userInfo")
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
              setIsLogin={setIsLogin}
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
      </div>
    </>
  );
};

export default Landing;
