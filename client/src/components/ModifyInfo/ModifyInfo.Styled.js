import Styled from "styled-components";

export const Container = Styled.div`
    position: absolute;
    
    bottom:0;
    left :0;
    height:90vh;
    width:85vw;
    display: flex;
    align-items:center;
    justify-content:center;
`;

export const Background = Styled.div`
    height:30vh;
    width:85vw;
    background-color:#9e9e9e;
`;

export const FormWrapper = Styled.div`
    display: flex;
    background: #f5f5f5;
    justify-content:center;
    align-items:center;
    width:100%;
    height:67%;
    position:relative;
    top:7em;
`;

export const Form = Styled.div`
    font-size:1.5em;
    position:relative;
    /* right:7em; */
    width:50%;
    height:11em;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

export const NameWrapper = Styled.div`
    width:100%;
    display: flex;
    justify-content:center;
    align-items:center;
    position: relative;
    bottom:3.7em;
    left:3em;
`;

export const ImgWrapper = Styled.div`
    position:relative;
    right:6em;
    bottom:3em;
    height:5em;
`;

export const Img = Styled.img`
    width:100%;
    height:100%;
    border-radius:50%;
`;
export const Name = Styled.div`
    font-size:1em;
    position: relative;
    right:1em;
    bottom:1.5em;
    margin-right:1em;
`;

export const Auth = Styled.div`
    font-size:0.7em;
    position: relative;
    right:1em;
    top:0.5em;
`;

export const Input = Styled.input`
    /* width:82%; */
    font-size:0.9em;
    /* height:3em; */
    /* margin-top:0.5em; */
`;

export const InputWrapper = Styled.div`
    display: flex;
    flex-direction:column;
    width:9.5em;
    position:relative;
    bottom:3em;
    left:1em;
`;

export const Div = Styled.div`
    text-align:right;
    position:relative;
    font-size:1em;
    right:10.5em;
    bottom:1.4em;
`;

export const Div2 = Styled.div`
font-size:20px;
`;
export const BtnWrapper = Styled.div`
    display: flex;
    flex-direction:row-reverse;
    position:relative;
    right:2em;
`;
export const Btn = Styled.button`
    cursor:pointer;
    width:4em;
    font-size:1em;
    position: relative;
    left:2em;
`;
