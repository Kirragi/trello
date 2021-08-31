import styled from 'styled-components';
export const NameColumn = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ImgColumn = styled.img`
  height: 25px;
  width: 25px;
`;
export const ButtonChenge = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;s
  }
`;
export const ButtonPlus = styled.button`
  background: none;
  border: none;
  margin-left: 30px;
  &:hover {
    cursor: pointer;s
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 20px 15px 15px;
`;
export const ButtonColumn = styled.button`
  background: palevioletred;
  color: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 0.25em 1em;
  &:hover {
    cursor: pointer;
  }
`;
export const InputName = styled.input`
  height: 24px;
  width: 200px;
  border-radius: 3px;
  border: 2px solid black;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`;
export const ChengeWraper = styled.div`
  margin: 25px 0 15px 15px;
`;
export const ColumnWraper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const ColumnContent = styled.div`
  width: 360px;
  background-color: rgb(156, 236, 173);
  border: 3px solid black;
  border-radius: 5px;
`;
export const CardsItem = styled.div`
  width: 330px;
  background-color: rgb(163, 255, 255);
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 14px;
`;
