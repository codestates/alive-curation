import { useHistory, Route, Link } from "react-router";
import styled from "styled-components";
import { ReactComponent as Alive_curation } from "../../resources/alive_curation.svg"
import Home from "../../Home.js"

const StyledButton = styled.button`
  font-size: 1.625rem;
  background-color: transparent;
  color: black;
  border: 0;
`
function HomeButton(){
  // let history = useHistory();
  
  // function handleClick(){
  //   history.push("/")
  // }
    return(
        <StyledButton >
          <Alive_curation/>
        </StyledButton>
    )
}

export default HomeButton