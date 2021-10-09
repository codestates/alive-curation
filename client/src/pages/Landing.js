import React, { useState } from "react";
import SignIn from "../components/SignIn/SignIn";
const Landing = () => {
  const [showModal, setShowModal] = useState(false);
  const activeModal = () => {
    setShowModal((open) => !open);
  };

  return (
    <>
      <div>여기는 랜딩페이지 입니다.</div>
      <button onClick={activeModal}>로그인</button>
      <SignIn showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Landing;
