import styled from 'styled-components';
export const CardWraper = styled.div`
  margin-left: 14px;
  font-family: 'Roboto';
  z-index: 0;
  &:hover {
    cursor: pointer;s
  }
`;
export const ButtonCards = styled.button`
  background: none;
  border: none;
  z-index: 1;
  &:hover {
    cursor: pointer;s
  }
`;
export const ImgCards = styled.img`
  height: 25px;
  width: 25px;
  transition: all 0.3s ease-out;
`;
export const ButtonWraper = styled.div`
  margin-top: 10px;
  display: flex;
`;
export const ThemeColumn = styled.p`
  font-weight: 400;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const FooterCard = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
