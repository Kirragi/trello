import React, { useState } from 'react';
import { NameProps } from '../app/entity';
import {
  Button,
  WrapperPopup,
  ContentPopup,
  YourName,
  InputName,
  Flex,
  Name,
} from './nameStyling';
function NamePopup(props: NameProps) {
  const [NewNeme, setNewNeme] = useState('');
  function onThemeNewCards(e: React.FormEvent<HTMLInputElement>): void {
    setNewNeme(e.currentTarget.value);
  }
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.setName([{ status: false, name: NewNeme }]);
    localStorage.setItem(
      'name',
      JSON.stringify([{ status: false, name: NewNeme }]),
    );
  }
  let popup: JSX.Element;

  if (props.name[0].status === true) {
    popup = (
      <WrapperPopup>
        <ContentPopup>
          <form onSubmit={onSubmit}>
            <YourName>Как вас зовут?</YourName>
            <Flex>
              <InputName type="text" onChange={onThemeNewCards} />
              <Button>Готово</Button>
            </Flex>
          </form>
        </ContentPopup>
      </WrapperPopup>
    );
  } else {
    popup = <Name>{props.name[0].name}</Name>;
  }
  return (
    <div>
      <div> {popup}</div>
    </div>
  );
}
export default NamePopup;
