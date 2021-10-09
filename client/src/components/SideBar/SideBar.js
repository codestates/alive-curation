import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  ImgBox,
  Img,
  Text,
  TextBold,
  TextBig,
  DeleteButton,
} from "./SideBar.Styled";
import gromit from "../../images/gromit.jpeg";
const SideBar = () => {
  return (
    <>
      <Navbar>
        <ImgBox>
          <Img src={gromit} alt="no pictures" />
        </ImgBox>
        <Text>그로밋님</Text>
        <TextBold>나의 도서</TextBold>
        <TextBig>46</TextBig>
        <TextBold>나의 큐레이터</TextBold>
        <TextBig>97</TextBig>
        <DeleteButton>회원탈퇴</DeleteButton>
      </Navbar>
    </>
  );
};

export default SideBar;
