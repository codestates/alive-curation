import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import HomeButton from "../Button/Button";
import { BiSearch } from "react-icons/bi";

import { SignInBtn, Btn, StyledLink } from "../../pages/Landing/Landing.Styled";
import axios from "axios";

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  // const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://localhost:8080/user", {
          withCredentials: true,
        });
        const { _id, email, name, role, thumbnail } = data;
        setUser({ _id, email, name, role, thumbnail });
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const activeModal = () => {
    setShowModal(true);
  };

  const logout = () => {
    axios
      .post(
        "https://localhost:8080/user/signout",
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setUser("");
        // setAdminMode(false);
      });
  };

  const navbarMeun = () => {
    if (user.role === "user") {
      return (
        <>
          <Btn onClick={logout}>LogOut</Btn>
          <StyledLink to="/mypage">MyPage</StyledLink>
        </>
      );
    } else if (user.role === "admin") {
      return (
        <>
          {/* <StyledLink to="/search">
            <BiSearch />
          </StyledLink>
          <StyledLink to="/post">글쓰기</StyledLink>
          {adminMode ? (
            <Btn onClick={changeMode}> 관리모드 On </Btn>
          ) : (
            <Btn onClick={changeMode}> 관리모드 Off </Btn>
          )} */}
          <Btn onClick={logout}>LogOut</Btn>
          <StyledLink to="/mypage">MyPage</StyledLink>
        </>
      );
    } else {
      return (
        <SignInBtn onClick={activeModal} setUser={setUser}>
          로그인
        </SignInBtn>
      );
    }
  };

  // const changeMode = () => {
  //   setAdminMode(!adminMode);
  // };

  // const deleteBook = (index) => {
  //   console.log(index, "번째 책 삭제");
  // };
  //스피너
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Link to="/">
        <HomeButton />
      </Link>
      {navbarMeun()}
      {showModal ? (
        <SignIn
          setUser={setUser}
          showModal={showModal}
          setShowModal={setShowModal}
        ></SignIn>
      ) : null}
    </>
  );
};

export default NavigationBar;
