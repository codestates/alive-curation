import React from "react";
import ModifyInfo from "../components/ModifyInfo/ModifyInfo";
import SideBar from "../components/SideBar/SideBar";
const MyPage = ({ setUserInfo, setIsLogin }) => {
  return (
    <>
      <ModifyInfo />
      <SideBar setUserInfo={setUserInfo} setIsLogin={setIsLogin} />
    </>
  );
};

export default MyPage;
