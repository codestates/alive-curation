import AdContainer from "../styles/AdContainer";
import NavContainer from "../styles/NavContainer";
import { useState, useEffect } from "react"
import axios from "axios"



function Home(props){

  const [status, setStatue] = useState(false)
  let obj = {
      isLogin : status,
     }
  props = obj
  

  useEffect(() => {
      axios.get('/api')
      .then(response => console.log(response.data))
  }, [])

  const onClickHandler = (event) => {
      if (event.target.textContent === "로그아웃"){
          axios.get('/')
          .then(response => {
              if (response.data.success){
                  setStatue(false)
                  props.history.push('/login')
              } else{
                  alert("로그아웃 실패")
              }
          })
      } else {
          console.log("log in")
          setStatue(true)
      }
  }


    return(
        <>
            <NavContainer status={ props.isLogin }>
            <a href="/">Alive curation</a>
    { props.isLogin ?  (
      <button onClick={onClickHandler}>로그아웃</button> )
    : ( 
    <button onClick={onClickHandler}>로그인</button> 
    )}
    </NavContainer>
            <AdContainer scr={ props.books } />
        </>
    )
}

export default Home