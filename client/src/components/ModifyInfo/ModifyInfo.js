import React from "react";
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
  Btn,
  BtnWrapper,
} from "./ModifyInfo.Styled";
import Profile from "../../images/gromit.jpeg";
const ModifyInfo = () => {
  return (
    <>
      <Background />
      <Container>
        <FormWrapper>
          <Form>
            <ImgWrapper>
              <Img src={Profile} />
            </ImgWrapper>
            <NameWrapper>
              <Name>그로밋</Name>
              <Auth>일반회원</Auth>
            </NameWrapper>
            <InputWrapper>
              <Input name="name" type="text" />
              <Div>이름</Div>
              <Input name="email" type="text" />
              <Div>이메일</Div>
              <Input name="password" type="password" />
              <Div>비밀번호</Div>
              <BtnWrapper>
                <Btn>변경하기</Btn>
              </BtnWrapper>
            </InputWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </>
  );
};

export default ModifyInfo;
