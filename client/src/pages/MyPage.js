import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
const MyPage = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <>
      <SideBar />
    </>
  );
};

export default MyPage;
