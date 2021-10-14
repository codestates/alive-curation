import React, { useEffect, useRef, useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import styled from "styled-components";
import Slide from "./Slide";
import img1 from "../../images/1.jpg";
import img2 from "../../images/select.svg";
const TOTAL_SLIDES = 1;

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  // console.log(slideRef);
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <Center>
        <BiChevronLeftCircle className="btn" onClick={PrevSlide} />
        <BiChevronRightCircle className="btn" onClick={NextSlide} />
      </Center>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        {/* <Slide img={img3} /> */}
      </SliderContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 37.5rem;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  overflow: hidden;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 5rem;
  transform: translate(-50%, -50%);
  .btn {
    width: 2rem;
    height: 2rem;
    margin: 30px;
    color: yellow;
    opacity: 0.4;
    &:hover {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
      border-radius: 100%;
      opacity: 0;
      -webkit-animation: sdb 1s infinite;
      animation: sdb 2s infinite;
      box-sizing: border-box;
    }
    @-webkit-keyframes sdb {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      60% {
        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1);
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes sdb {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      60% {
        box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
        opacity: 0;
      }
      80% {
        opacity: 0;
      }
    }
  }
`;
