import React from "react";
import ModifyInfo from "../components/ModifyInfo/ModifyInfo";
import SideBar from "../components/SideBar/SideBar";
const MyPage = ({ userInfo, setUserInfo, changeDataHandler }) => {
  return (
    <>
      <ModifyInfo
        changeDataHandler={changeDataHandler}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <SideBar userInfo={userInfo} setUserInfo={setUserInfo} />
    </>
  );
};

export default MyPage;
