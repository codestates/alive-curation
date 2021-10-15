import Styled from "styled-components";
import { ReactComponent as Banner } from "../../images/logo.svg";

const HomeBtn = Styled.button`
height: 1.625rem;
border: 0;
background:transparent;
`;

function HomeButton() {
  return (
    <HomeBtn>
      <Banner />
    </HomeBtn>
  );
}

export default HomeButton;
