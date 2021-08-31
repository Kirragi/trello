import styled from 'styled-components';
export const WrapperPopup = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto';
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderPopup = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContentPopup = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`;
export const ButtonCross = styled.button`
  background: none;
  border: none;
  margin-top:-30px;
  margin-right:-15px;
  &:hover {
    cursor: pointer;s
  }
`;
export const ImgPopup = styled.img`
  height: 30px;
  width: 30spx;
`;
export const HederText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const TextPopup = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
`;
export const ThemeInput = styled.input`
  height: 24px;
  width: 295px;
  border-radius: 3px;
  border: 2px solid black;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`;
export const Textarea = styled.textarea`
  height: 80px;
  width: 295px;
  border-radius: 3px;
  border: 2px solid black;
  resize: none;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px 0 10px 0;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 0.25em 1em;
  &:hover {
    cursor: pointer;
  }
`;
