import React, { useState, useEffect } from "react";
import {
  Background,
  Container,
  Input,
  InputWrapper,
  FormWrapper,
  Form,
  Name,
  Auth,
  NameWrapper,
  Img,
  ImgWrapper,
  Div,
  Div2,
  Btn,
  BtnWrapper,
} from "./ModifyInfo.Styled";
import axios from "axios";
// axios.defaults.withCredentials = true;
const ModifyInfo = ({ userinfo, setUserInfo }) => {
  const headerOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [presentPassword, setPresentPassword] = useState("");
  useEffect(() => {
    console.log(userinfo);
    // setUserInfo(JSON.parse(window.localStorage.getItem("user")));
  }, []);
  const modifyHandler = () => {
    if (password === passwordCheck) {
      return axios
        .patch(
          "https://localhost:8080/user",
          { email: userinfo.email, name, password },
          headerOptions
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    } else {
      console.log("비밀번호를 다시 확인해주세요");
    }
  };
  return (
    <>
      <Background />
      <Container>
        <FormWrapper>
          <Form>
            <ImgWrapper></ImgWrapper>
            <NameWrapper>
              {/* <Name>{userinfo.name}</Name> */}
              {/* <Auth>{userinfo.role === "user" ? "일반유저" : "운영자"}</Auth> */}
            </NameWrapper>
            <InputWrapper>
              {/* <Div2>{userinfo.email}</Div2> */}
              <Div>이메일</Div>
              <Input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Div>변경할 비밀번호</Div>
              <Input
                name="password"
                type="password"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <Div>비밀번호 확인</Div>
              <Input
                name="password"
                type="password"
                value={passwordCheck}
                onChange={(e) => setPresentPassword(e.target.value)}
              />
              <Div>현재 비밀번호</Div>
              <BtnWrapper>
                <Btn onClick={modifyHandler}>변경하기</Btn>
              </BtnWrapper>
            </InputWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </>
  );
};

export default ModifyInfo;
