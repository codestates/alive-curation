import React from "react";
import { Container, Img, ImgWrapper } from "./Landing.Styled";

import SoloQuestion from "../../images/soloquestion.svg";
const Landing = () => {
  return (
    <>
      <div>여기는 네비게이션이 들어갑니다.</div>
      <Container>
        <ImgWrapper>
          <Img src={SoloQuestion} />
        </ImgWrapper>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
      </Container>
    </>
  );
};

export default Landing;
