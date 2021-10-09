import styled from "styled-components"


const Navigation = styled.nav`
  position:"absolute",
  width:"calc(100% - 9.375*2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid",
  borderBottomColor: "black",
  paddingLeft: "9.375rem", 
  paddingRight : "9.375rem",
  height: "3.75rem",
  zIndex: "2"
`

function NavContainer({ props }) {


  return (
  <Navigation status={ props }>
    {/* <a href="/">Alive curation</a>
    { props.isLogin ?  (
      <button onClick={onClickHandler}>로그아웃</button> )
    : ( 
    <button onClick={onClickHandler}>로그인</button> 
    )} */}
  </Navigation>
  )
}
export default NavContainer