import axios from "axios"
import { useEffect, useState } from "react";
import HomeButton from "../Button/HomeButton";
import LoginButton from "../Button/LoginButton";


axios.defaults.withCredentials = true;


const navStyle = {
    width: "calc(100% - 9.375*2rem)",
    position:"absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid",
    borderBottomColor: "black",
    paddingLeft: "9.375rem", 
    paddingRight : "9.375rem",
    height: "3.75rem",
}

function Navbar(props){

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



    return (
        <navStyle status={ props }>
            <HomeButton onClick={onClickHandler}/>
            <LoginButton onClick={onClickHandler}/>
        </navStyle>
    )
}

export default Navbar