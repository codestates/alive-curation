import styled from "styled-components";
import { useHistory } from "react-router";

const StyledButton = styled.button`
  width: 4.68rem;
  height: 1.56rem;
  font-size: 0.75rem;
  background-color: black;
  color: white;
  border: 0;
  border-radius : 4px;
`
function LoginButton(){
  // let history = useHistory();
  
  // function handleClick(){
  //   history.push("/login")
  // }
    return(
        <StyledButton>
          로그인
          </StyledButton>
    )
}

export default LoginButton