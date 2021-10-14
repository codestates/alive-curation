import React from "react";
import styled from "styled-components";

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  border: solid;
  width: 100%;
  /* height: 100%; */
  /* height: 37.5rem; */
`;
