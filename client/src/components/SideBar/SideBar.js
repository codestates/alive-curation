import React from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import {
  Navbar,
  ImgBox,
  Img,
  Text,
  TextBold,
  TextBig,
  DeleteButton,
} from "./SideBar.Styled";
const SideBar = ({ userinfo, setUserInfo }) => {
  const headerOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const history = useHistory();
  const logoutHandler = () => {
    return axios
      .post("https://localhost:8080/user/signout", {}, headerOptions)
      .then((res) => {
        window.localStorage.removeItem("user");
        setUserInfo({});
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  const deleteUser = () => {
    axios
      .delete("https://localhost:8080/user", {}, headerOptions)
      .then((res) => window.localStorage.removeItem("user"))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Navbar>
        <Link to="/">
          <ImgBox>
            {/* <Img src={userinfo.thumbnail} alt="no pictures" /> */}
          </ImgBox>
        </Link>
        {/* <Text>{userinfo.name}</Text> */}
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
