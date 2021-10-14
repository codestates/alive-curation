import Styled from "styled-components";

export const Navbar = Styled.div`
    border: 0.5px solid #c4c4c4;
    background: #eeeeee;
    border-width:thin;
    position: absolute;
    bottom:0;
    right :0;
    height:90vh;
    width:15vw;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

export const ImgBox = Styled.div`
    width:8em;
    height:8em;
    border-radius : 70%;
    margin-bottom:1em;
    overflow : hidden;
`;

export const Img = Styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

export const DeleteButton = Styled.div`
    cursor : pointer;
    position: absolute;
    margin-bottom:3em;
    bottom:0;
`;

export const Text = Styled.div`
    margin-bottom : 3em;
    font-size:1em;
`;

export const TextBig = Styled.div`
    font-size:3em;
    margin-bottom : 1em;
`;

export const TextBold = Styled.div`
    font-weight: bold;
    margin-bottom : 1em;
`;
