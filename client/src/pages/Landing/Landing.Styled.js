import Styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ImgWrapper = Styled.div`
    width:40%;
    margin-bottom:10em;
`;

export const ImgLeftWrapper = Styled(ImgWrapper)`
    position:relative;
    right:15em;
`

export const ImgRightWrapper = Styled(ImgWrapper)`
    position:relative;
    left :15em;
`

export const Img = Styled.img`
    width:100%;
    height:100%;
`;

export const NavBar = Styled.nav`
    padding: 5px 9.375rem 5px 9.375rem;
    height: 10vh;
    display: flexbox;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
`



export const SignInBtn = Styled.div`
    width: 4.68rem;
    height: 1.56rem;
    background-color: black;
    color: white;
    border-radius : 4px;
    font-size : 0.75rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
`

export const Btn = Styled.div`
    width: 4.68rem;
    height: 1.56rem;
    background-color: black;
    color: white;
    border-radius : 4px;
    font-size : 0.75rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
`

export const StyledLink = Styled(Link)`
    width: 4.68rem;
    height: 1.56rem;
    background-color: black;
    color: white;
    border-radius : 4px;
    font-size : 0.75rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`



// export const HeaderDisplay = Styled.div`
//     width: 100%;
//     height:46.56rem;
//     background-color: gray;
// `

// export const MainArticleContainer = Styled.div`
//     display:table;
//     margin-left: auto;
//     margin-right: auto;
//     justify-content: space-between;
//     align-items: center;
//     width: calc(100% - 10.375*2rem);
//     height: 46.56rem;
//     border: 1px solid black;
//     overflow:hidden;
// `

// export const MainArticle = Styled.article`
//     position: relative;
//     display:flex;
//     margin: auto;
//     margin-top: 9rem;
//     margin-bottom: 9rem;
//     align-items: center;
//     width: 59rem;
//     height: 34.81rem;
//     background-color: tan;
// `

// export const MainArticleBookCover = Styled.img`
//     margin-left: 2.5rem;
//     margin-bottom: 12.5rem;
//     display: float-left;
//     clear;
//     width: 12.5rem;
//     height: 18.75rem;
//     background-color : yellow;
// `

// export const MainArticlePost = Styled.div`
//     margin-left: 1.25rem;
//     margin-right: 2.5rem;
//     margin-bottom: 12.5rem;
//     display: float-right;
//     width: 41.125rem;
//     height: 18.75rem;
//     background-color: white;
// `
// export const MainArticleComment = Styled.div`
//     position: absolute;
//     width: calc(100% - 25rem);
//     height: 12.55rem;
//     background-color: black;
//     bottom: 0;
//     left: 12.5rem;
// `

// export const BookRecommendContainer = Styled.div`
//     display:table;
//     margin: auto;
//     margin-top: 4rem;
//     justify-content: space-between;
//     align-items: center;
//     width: calc(100% - 10.375*2rem);
//     height: 38.43rem;
//     border: 1px solid black;
    
// `

// export const BookRecommendRow = Styled.article`
//     display:flex;
//     margin: auto;
//     margin-top: 5rem;
//     margin-bottom: 5rem;
//     justify-content: space-between;
//     align-items: center;
//     width: 59rem;
//     height: 38.43rem;
// `

// export const BookCard = (props) => {

//     const Card = Styled.div`
//     width: 15.9rem;
//     height: 35rem;
//     border: 1px solid black;
//     border-radius: 10px;
//     `
//     const CardUpper = Styled.div`
//     width: 100%;
//     height: 26.875rem;
//     display: flex;
//     align-items: center;
//     img {
//         padding: 3.125rem;
//         width: 9.625rem;
//         height: 15.375rem;
//         border-radius 4px;
//         border-radius: 6px;
//     }
//     `

//     const CardLower = Styled.div`
//     width: 100%;
//     height:8.1875rem;
//     `

//     // const BookImg = Styled.img`
//     //     padding: 3.125rem;
//     //     width: 9.625rem;
//     //     height: 15.375rem;
//     //     border-radius 4px;
//     //     border-radius: 6px;
//     // `

//     return(
//         <Card>
//             <CardUpper>
//                 <img src={props}/>
//             </CardUpper>
//             <CardLower/>
//         </Card>
//     )
// }