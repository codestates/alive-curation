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
const ModifyInfo = ({ user }) => {
  const headerOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [changePassword, setChangePassword] = useState("");

  const modifyHandler = () => {
    if (password === passwordCheck) {
      return axios
        .patch(
          "https://localhost:8080/user",
          { password, changePassword },
          headerOptions
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <>
      <Background />
      <Container>
        <FormWrapper>
          <Form>
            <ImgWrapper>
              <Img src={user.thumbnail} />
            </ImgWrapper>
            <NameWrapper>
              <Name>{user.name}</Name>
              <Auth>{user.role === "user" ? "일반유저" : "운영자"}</Auth>
            </NameWrapper>
            <InputWrapper>
              <Div2>{user.email}</Div2>
              <Div>이메일</Div>
              <Input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Div>비밀번호</Div>
              <Input
                name="passwordCheck"
                type="password"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <Div>비밀번호 확인</Div>
              <Input
                name="passwordChange"
                type="password"
                value={changePassword}
                onChange={(e) => setChangePassword(e.target.value)}
              />
              <Div>변경할 비밀번호</Div>
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
