import React, { useEffect, useRef, useState } from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi"
import styled from 'styled-components';
import Card from './Card';


export default function ArticleCarousel( item ) {


  const TOTAL_SLIDES = item.length
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  console.log(item)
  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    // slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}*100%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
    <Center>
      <BiChevronLeftCircle className="btn" onClick={PrevSlide} />
      <BiChevronRightCircle className="btn" onClick={NextSlide} />
    </Center>
    <SliderContainer ref={slideRef}>
      {/* {Object.entries(item).map((book)=>{
        return(<Card input={book}/>)
      }}} */}
    </SliderContainer>
  </Container>
  );
}
const Container = styled.div`
position:relative;
display:table;
margin-left: auto;
margin-right: auto;
justify-content: space-between;
align-items: center;
width: calc(100% - 10.375*2rem);
height: 46.56rem;
overflow:hidden;
`

const BookImg = styled.img`
margin-left: 2.5rem;
margin-bottom: 12.5rem;
display: float-left;
width: 12.5rem;
height: 18.75rem;
border: 1px solid black;
`

const MainArticlePost = styled.div`
    margin-left: 1.25rem;
    margin-left: 1.25rem;
    margin-right: 2.5rem;
    margin-bottom: 12.5rem;
    display: float-right;
    width: 41.125rem;
    height: 18.75rem;
    border: 1px solid black;
`

const MainArticleComment = styled.div`
  position: absolute;
  width: calc(100% - 25rem);
  height: 12.55rem;
  border: 1px solid black;
  bottom: 0;
  left: 12.5rem;
`

const SliderContainer = styled.div`
  position: relative;
  display:flex;
  margin: auto;
  margin-top: 9rem;
  margin-bottom: 9rem;
  align-items: center;
  width: 59rem;
  height: 34.81rem;
  border: 1px solid black;
`

const Center = styled.div`
  z-index: 1;
  width:100%;
  display:flex;
  justify-content:space-between;
  position:absolute;
  top: 50%;
  left: 50%;
  height: 5rem;
  transform: translate(-50%, -50%);
  .btn {
      width: 2rem;
      height: 2rem;
      color:black;
      opacity: 1;
      &:hover {
        box-shadow: 0 0 0 0 rgba(255,255,255,.1);
        border-radius: 100%;
        opacity: 0;
        -webkit-animation: sdb 2s infinite;
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
        40% {
          box-shadow: 0 0 0 20px rgba(255,255,255,.1);
          opacity: 0;
        }
        60% {
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
          box-shadow: 0 0 0 30px rgba(255,255,255,0);
          opacity: 0;
        }
        80% {
          opacity: 0;
        }
      }
  }
`;