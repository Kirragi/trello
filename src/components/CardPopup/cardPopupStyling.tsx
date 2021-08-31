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
  width: 400px;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`;
export const ButtonCross = styled.button`
  background: none;
  border: none;
  margin-top:-20px;
  margin-right:-20px;
  &:hover {
    cursor: pointer;s
  }
`;
export const ImgCross = styled.img`
  height: 30px;
  width: 30spx;
`;
export const ThemeText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ThemeWrapper = styled.div`
  display: flex;
`;
export const ImgTheme = styled.img`
  height: 30px;
  width: 30spx;
`;
export const ImgText = styled.img`
  height: 20px;
  width: 20spx;
`;
export const ButtonChenge = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;s
  }
`;
export const InputTheme = styled.input`
  height: 24px;
  width: 250px;
  border-radius: 3px;
  margin: 10px 0;
  border: 2px solid black;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`;
export const ButtonTheme = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px 0 10px 20px;
  font-size: 16px;
  font-family: 'Roboto';
  padding: 0.25em 1em;
  &:hover {
    cursor: pointer;
  }
`;
export const Textarea = styled.textarea`
  height: 90px;
  width: 380px;
  border-radius: 3px;
  border: 2px solid black;
  resize: none;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`;
export const ButtonText = styled.button`
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
export const InputComment = styled.input`
  height: 24px;
  width: 250px;
  border-radius: 3px;
  margin: 10px 0;
  border: 2px solid black;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`;
export const ButtonComment = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px 0 10px 20px;
  font-size: 16px;
  font-family: 'Roboto';
  padding: 0.25em 1em;
  &:hover {
    cursor: pointer;
  }
`;
export const CommentWrapper = styled.div`
  border-top: 2px solid palevioletred;
`;
export const ButtonTrash = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;s
  }
`;
export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
