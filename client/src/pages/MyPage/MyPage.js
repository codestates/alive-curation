import React from "react";
import ModifyInfo from "../../components/ModifyInfo/ModifyInfo";
import SideBar from "../../components/SideBar/SideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import { NavBar } from "../Landing/Landing.Styled";
const MyPage = ({ userinfo, setUserInfo }) => {
  return (
    <>
      <NavBar>
        <NavigationBar />
      </NavBar>
      <ModifyInfo userinfo={userinfo} setUserInfo={setUserInfo} />
      <SideBar userinfo={userinfo} />
    </>
  );
};

export default MyPage;
