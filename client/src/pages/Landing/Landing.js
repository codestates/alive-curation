import React, { useEffect } from "react";
import {
  Container,
  Img,
  Div,
  DivWrapper2,
  DivWrapper3,
  ImgLeftWrapper,
  ImgRightWrapper,
  NavBar,
  Div2,
  DivCenter,
} from "./Landing.Styled";
import AOS from "aos";
import "aos/dist/aos.css";
import soloQuestion from "../../images/soloquestion.svg";
import updateImg from "../../images/update.svg";
import teamImg from "../../images/team.svg";
import Carousel from "../../components/Carousel/Carousel";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <NavBar>
        <NavigationBar />
      </NavBar>
      <Carousel />
      <Container>
        <ImgLeftWrapper
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Img src={soloQuestion} />
          <DivWrapper2>
            <Div>좋은책을 추천받고 싶을땐?</Div>
          </DivWrapper2>
        </ImgLeftWrapper>
        <ImgRightWrapper
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Img src={updateImg} />
          <DivWrapper3>
            <Div>우리 서비스는 매일 전문가들이</Div>
            <Div>직접 업데이트 합니다.</Div>
          </DivWrapper3>
        </ImgRightWrapper>
        <ImgLeftWrapper
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Img src={teamImg} />
          <DivWrapper2>
            <Div>전문 큐레이션과 함께하는</Div>
            <Div>Alive Curation</Div>
          </DivWrapper2>
          <DivCenter>
            <Div2
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"
            >
              지금 함께 하세요!
            </Div2>
          </DivCenter>
        </ImgLeftWrapper>
      </Container>
    </>
  );
};

export default Landing;

// import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import SignIn from "../components/SignIn/SignIn"
// import HomeButton from "../components/Button/HomeButton"
// import Carousel from "../components/Carousel/Carousel"
// import ArticleCarousel from "../components/Carousel/ArticleCarousel"
// import { BiSearch } from "react-icons/bi"
// import Slide from "../components/Slick/Slide"
// import Card from "../components/Carousel/Card"

// import {
// 	SignInBtn,
// 	NavBar,
// 	BookRecommendContainer,
// 	BookRecommendRow,
// 	BookCard,
// 	Btn,
// 	StyledLink,
// } from "./Landing.styled"
// import axios from "axios"

// const Landing = () => {
// 	const [showModal, setShowModal] = useState(false)
// 	const [isLoading, setIsLoading] = useState(true)
// 	const [user, setUser] = useState({})
// 	const [adminMode, setAdminMode] = useState(false)
// 	const [books, setBooks] = useState([])

//   let list = []

//   Object.entries(books).map((item)=> list.push(item[1]))
//   list = list.splice(0, 20)

//   console.log(list)

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const { data } = await axios.get("https://localhost:8080/user", { withCredentials: true })
// 				const { _id, email, name, role, thumbnail } = data
// 				setUser({ _id, email, name, role, thumbnail })
// 			} catch (err) {
// 				console.log(err)
// 			}
// 			setIsLoading(false)
// 		}
// 		fetchData()
// 	}, [])

//   useEffect(()=> {
//     axios.get("https://localhost:8080/posts")
//     .then((res) => setBooks(res.data))
//   },[])

//   console.log(books)

// 	const activeModal = () => {
// 		setShowModal((open) => !open)
// 	}

// 	const logout = () => {
// 		axios.post("https://localhost:8080/user/signout")
// 		setUser("")
// 		setAdminMode(false)
// 	}

// 	const navbarMeun = () => {
// 		if (user.role === "user") {
// 			return (
// 				<>
// 					<Btn onClick={logout}>LogOut</Btn>
// 					<StyledLink to="/mypage" userInfo={user}>
// 						나는 유저에요
// 					</StyledLink>
// 					<StyledLink to="/search"></StyledLink>
// 				</>
// 			)
// 		} else if (user.role === "admin") {
// 			return (
// 				<>
// 					<StyledLink to="/search">
// 						<BiSearch />
// 					</StyledLink>
// 					<StyledLink to="/post">글쓰기</StyledLink>
// 					{adminMode ? <Btn onClick={changeMode}> 관리모드 On </Btn> : <Btn onClick={changeMode}> 관리모드 Off </Btn>}
// 					<StyledLink to="/mypage" userInfo={user}>
// 						{user.name}
// 					</StyledLink>
// 					<Btn onClick={logout}>LogOut</Btn>
// 				</>
// 			)
// 		} else {
// 			return <SignInBtn onClick={activeModal}>로그인</SignInBtn>
// 		}
// 	}

// 	const changeMode = () => {
// 		setAdminMode(!adminMode)
// 	}

// 	const deleteBook = (index) => {
// 		console.log(index, "번째 책 삭제")
// 	}
//     //스피너
// 	return isLoading ? (
// 		<h1>Loading...</h1>
// 	) : (
// 		<>
// 			<NavBar className="nav-header">
// 				<Link to="/">
// 					<HomeButton />
// 				</Link>
// 				{navbarMeun()}
// 				<SignIn showModal={showModal} setShowModal={setShowModal} setUser={setUser}></SignIn>
// 			</NavBar>
// 			<Carousel className="header" />
// 			<ArticleCarousel items={list} >
//       </ArticleCarousel>
//       {/* <Slide image={books.image}/> */}

// 			{/* <MainArticleContainer>
//           <BiChevronLeftCircle className="btn" onClick={()=>)} />
//           <BiChevronRightCircle className="btn" onClick={NextSlide} />
//           <MainArticle>
//             <MainArticleBookCover/>
//             <MainArticlePost/>
//             <MainArticleComment/>
//           </MainArticle>
//         </MainArticleContainer> */}

// 			<BookRecommendContainer>
// 				<BookRecommendRow>
//         {Object.entries(books).map((item)=>{
//           <Card input={item}/>
//         })}

// 					{/* {bookcard.map((book, idx) => {
// 						return (
// 							<div>
// 								<p>{idx}</p>
// 								{adminMode ? <p onClick={() => deleteBook(idx)}>X</p> : ""}
// 								<BookCard />
// 							</div>
// 						)
// 					})} */}
// 					{/* <BookCard/>
//             <BookCard/>
//             <BookCard/> */}
// 					{/* <img src={"https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"}/>
//             <img src={"https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"}/>
//             <img src={"https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"}/> */}
// 				</BookRecommendRow>
// 			</BookRecommendContainer>
// 		</>
// 	)
// }

// export default Landing
