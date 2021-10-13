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
const SideBar = ({ userInfo, setUserInfo }) => {
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
      .catch(({ response }) => console.log(response.data));
  };

  const deleteUser = () => {
    axios
      .delete("https://localhost:8080/user", {}, headerOptions)
      .then((res) => window.localStorage.removeItem("user"))
      .catch(({ response }) => console.log(response.data));
  };
  return (
    <>
      <Navbar>
        <Link to="/">
          <ImgBox>
            <Img src={userInfo.thumbnail} alt="no pictures" />
          </ImgBox>
        </Link>
        <Text>{userInfo.name}</Text>
        <TextBold>나의 도서</TextBold>
        <TextBig>46</TextBig>
        <TextBold>나의 큐레이터</TextBold>
        <TextBig>97</TextBig>
        <div>
          <button onClick={logoutHandler}>로그아웃</button>
        </div>
        <DeleteButton onClick={deleteUser}>회원탈퇴</DeleteButton>
      </Navbar>
    </>
  );
};

export default SideBar;
