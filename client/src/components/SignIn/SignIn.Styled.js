import Styled from "styled-components";

export const Btn = Styled.button`
    position: absolute;
    top:0;
    right:0;
    border-radius:3em;
    height:2em;
    width:2em;
    font-size:1.5em;
    border:0;
    cursor:pointer;
    background: #fafafa;
    color:#b4b4b4;
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
  z-index: 2;
`;

export const ModalWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  position: relative;
  right:2em;
`;

export const SlideModal = Styled.div`
  position: relative;
  right: 3.5em;
`;

export const SlideModalContents = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  border-radius: 1em 0 0 1em;
  background-color: #e5f7ff;
  width: 100%;
  position: relative;
  left : 8em;
  box-sizing: border-box;
  overflow:hidden;
`;

export const SlideImg = Styled.img`

  height:100%;
  position: relative;
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
  font-size: 2em;
`;

export const Img = Styled.img`
  float:left;
  width:8em;
  position: relative;
  right:3em;
  bottom:0.6em;
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
  background-color: #fafafa;
  width: 100%;
  position: relative;
  padding: 0 1em 2em;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
// 유효성검사 실패 -> 0.2em solid e53935
export const Email = Styled.input`
  font-size: 0.5em;
  margin-top: 1em;
  border-radius: 0.5em;
  width:100%;
  height: 3.5em;
  border: ${(props) =>
    props.failEmail ? `0.2em solid #e53935` : `0.1em solid #b4b4b4`};
  padding: 0.2em 0.8em;
  outline: none;
  box-sizing: border-box;
`;

export const Password = Styled.input`
  border: ${(props) =>
    props.failPassword ? `0.2em solid #e53935` : `0.1em solid #b4b4b4`};
  font-size: 0.5em;
  margin-top: 1em;
  border-radius: 0.5em;
  width: 100%;
  height: 3.5em;
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
  margin-top: 1em;
  margin-bottom: 0.5em;
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
  margin-top: 0.5em;
  margin-bottom: 1em;
  border-radius: 0.2em;
  border:0.5px solid #c4c4c4;
`;

export const Line = Styled.hr`
  border-top: 1px solid #c4c4c4;
  width: 100%;
  margin-top:0.2em;
  margin-bottom:0.2em;
`;

export const ContentWrapper = Styled.div`
  /* border:solid; */
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:relative;
  top:1em;
`;
