import React from "react";
import axios from "axios";
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
const SideBar = ({ user }) => {
  const headerOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  };

  const deleteUser = () => {
    axios
      .delete("https://localhost:8080/user", {}, headerOptions)
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Navbar>
        <Link to="/">
          <ImgBox>
            <Img src={user.thumbnail} alt="no pictures" />
          </ImgBox>
        </Link>
        <Text>{user.name}</Text>
        <TextBold>나의 도서</TextBold>
        <TextBig>46</TextBig>
        <TextBold>나의 큐레이터</TextBold>
        <TextBig>97</TextBig>
        <DeleteButton onClick={deleteUser}>회원탈퇴</DeleteButton>
      </Navbar>
    </>
  );
};

export default SideBar;
