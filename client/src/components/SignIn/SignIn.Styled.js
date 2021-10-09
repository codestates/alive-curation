import Styled from "styled-components";

export const Btn = Styled.button`
    position: absolute;
    top:0;
    right:0;
    width:2em;
    font-size:1em;
`;
export const Modal = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SlideModal = Styled.div`
  position: relative;
  right: 3.5em;
`;

export const SlideModalContents = Styled.div`
  margin: 10em;
  display: flex;
  justify-content: space-around;
  height: 50vh;
  border-radius: 1em 0 0 1em;
  background-color: white;
  width: 100%;
  position: relative;
  right: 2em;
  padding: 0 1em 2em;
  box-sizing: border-box;
`;

export const SlideBtn = Styled.div`
  display: flex;
  width: 1em;
`;

export const LoginModal = Styled.div`
  border-radius: 0 1em 1em 0;
  width: 20em;
  box-sizing: border-box;
  background: #fff;
`;

export const Close = Styled.span`
  border:solid;
  font-size: 2em;
`;

export const Img = Styled.img`
  float:left;
  font-size:2em;
`;

export const Wrapper = Styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: relative;
  top:0.3em;
`;

export const ModalContents = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  border-radius: 0 1em 1em 0;
  background-color: #e0e0e0;
  width: 100%;
  position: relative;
  padding: 0 1em 2em;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Email = Styled.input`
  font-size: 0.5em;
  margin-top: 2em;
  border-radius: 0.1em;
  width: 100%;
  height: 3em;
  border: 0.1em solid #e5e5e5;
  padding: 0.2em 0.8em;
  outline: none;
  box-sizing: border-box;

  
`;

export const Password = Styled.input`
  font-size: 0.5em;
  margin-top: 0.8em;
  border-radius: 0.1em;
  width: 100%;
  height: 3em;
  border: 0.1em solid #e5e5e5;
  padding: 0.2em 0.8em;
  outline: none;
  box-sizing: border-box;
`;

export const Name = Styled.input`
  font-size: 0.5em;
  margin-top: 1em;
  border-radius: 0.1em;
  width: 100%;
  height: 3em;
  border: 0.1em solid #e5e5e5;
  padding: 0.2em 0.8em;
  outline: none;
  box-sizing: border-box;
`;

export const LoginBtn = Styled.button`
  width: 16em;
  height: 2.3em;
  font-size: 0.9em;
  cursor: pointer;
  background-color: #3f3f3f;
  color: white;
  line-height: 0.1em;
  margin-top: 0.8em;
  margin-bottom: 0.3em;
  border-radius: 0.2em;
  border-style: none;
`;

export const JoinBtn = Styled.button`
  width: 16em;
  height: 2.3em;
  font-size: 0.9em;
  cursor: pointer;
  background-color: #fafafa;
  color: #3f3f3f;
  line-height: 0.1em;
  margin-top: 0.3em;
  margin-bottom: 1em;
  border-radius: 0.2em;
  border-style: none;
`;

export const Line = Styled.hr`
  color: #3f3f3f;
  width: 85%;
`;
