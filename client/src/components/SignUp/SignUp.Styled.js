import Styled from "styled-components";

export const Btn = Styled.button`
    position: absolute;
    top:0;
    right:0;
    height:1.5em;
    width:1.5em;
    border-radius:3em;
    font-size:2em;
    border:0;
    cursor:pointer;
    background: #e0e0e0;
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

export const SignUpModal = Styled.div`
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
  width:8em;
  position: relative;
  right:3em;
  bottom:0.5em;
`;

export const Wrapper = Styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: relative;
  top:1.5em;
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

export const TypeWrapper = Styled.div`
  width:100%;
  height:4.5vh;
  /* border:solid; */
  position:relative;
  top:0.3em;
  margin-bottom:0.5em;
`;

export const Img2 = Styled(Img)`
    display:${(props) => (props.pass ? `inline` : `none`)};
    width:1.5em;
    position:relative;
    left:13em;
    bottom:1.5em;
    overflow:visible;
    transition:1s;
`;

export const Email = Styled.input`
  font-size: 0.5em;
  margin-top: 0.5em;
  border-radius: 0.1em;
  width:100%;
  height: 3em;
  border: 0.1em solid #e5e5e5;
  padding: 0.2em 0.8em;
  outline: none;
  box-sizing: border-box;
`;

export const Password = Styled.input`
  font-size: 0.5em;
  margin-top: 0.5em;
  border-radius: 0.1em;
  width:100%;
  height: 3em;
  border: 0.1em solid #e5e5e5;
  padding: 0.2em 0.8em;
  outline: none;
  box-sizing: border-box;
`;

export const Name = Styled.input`
  font-size: 0.5em;
  margin-top: 0.5em;
  border-radius: 0.1em;
  width: 100%;
  height: 3em;
  border: 0.1em solid #e5e5e5;
  padding: 0.2em 0.8em;
  outline: none;
  box-sizing: border-box;
`;

export const CheckBtn = Styled.button`
  position: relative;
  top:0.2em;
  left:0.1em;
  width:3.5em;
  border:0;
  outline:0;
  cursor: pointer;
`;

export const SignUpBtn = Styled.button`
  width: 16em;
  height: 2.3em;
  font-size: 0.9em;
  cursor: pointer;
  background-color: #3f3f3f;
  color: white;
  line-height: 0.1em;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
  border-radius: 0.2em;
  border-style: none;
  position:relative;
  top:0.5em;
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

export const Warning = Styled.div`
  font-size:0.1em;
  color:red;
  float:left;
`;

export const Checking = Styled(Warning)`
  color:green;
  float:right;
  position:relative;
  right:4em;
`;

export const WarningWrapper = Styled.div`
  position: relative;
  left:0.3em;
  width:100%;
`;
