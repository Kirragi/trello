import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    cursor: pointer;
  }
`;
export const WrapperPopup = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentPopup = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`;
export const YourName = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const InputName = styled.input`
  height: 25px;
  width: 200px;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 400;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const Name = styled.p`
font-family:'Roboto' ;
font-weight: 600;
font-size: 30px;
}
`;
