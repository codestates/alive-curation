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
import gromit from "../../images/gromit.jpeg";
const SideBar = ({ setUserInfo, setIsLogin }) => {
  const history = useHistory();
  const logoutHandler = () => {
    axios
      .post(
        "https://localhost:8080/user/signout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        window.localStorage.removeItem("userInfo");
        setIsLogin(false);
        setUserInfo({});
        history.push("/");
      });
  };

  const deleteUser = () => {
    axios
      .delete(
        "https://localhost:8080/user",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res));
  };
  return (
    <>
      <Navbar>
        <Link to="/">
          <ImgBox>
            <Img src={gromit} alt="no pictures" />
          </ImgBox>
        </Link>
        <Text>그로밋님</Text>
        <TextBold>나의 도서</TextBold>
        <TextBig>46</TextBig>
        <TextBold>나의 큐레이터</TextBold>
        <TextBig>97</TextBig>
        <div>
          <button onClick={logoutHandler}>로그아웃</button>
        </div>
        <DeleteButton onClick={() => deleteUser()}>회원탈퇴</DeleteButton>
      </Navbar>
    </>
  );
};

export default SideBar;
