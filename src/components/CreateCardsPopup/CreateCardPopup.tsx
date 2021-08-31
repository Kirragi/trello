import React, { useState } from 'react';
import crossIcon from '../assets/img/cross.png';
import { CreateCardsProps } from '../app/entity';
import {
  WrapperPopup,
  HeaderPopup,
  ContentPopup,
  ButtonCross,
  ImgPopup,
  HederText,
  TextPopup,
  ThemeInput,
  Textarea,
  Button,
} from './createCardStyling';
function CreateCardsPopup(props: CreateCardsProps) {
  const [themeNewCards, setThemeNewCards] = useState('');
  const [textNewCards, setTextNewCards] = useState('');
  function onThemeNewCards(e: React.FormEvent<HTMLInputElement>): void {
    setThemeNewCards(e.currentTarget.value);
  }
  function onTextNewCards(e: React.FormEvent<HTMLTextAreaElement>): void {
    setTextNewCards(e.currentTarget.value);
  }
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (themeNewCards !== '' && textNewCards !== '') {
      props.addCard(themeNewCards, textNewCards, props.active[0].createIndex);
      setThemeNewCards('');
      setTextNewCards('');
      props.setActive([{ status: false, createIndex: 0 }]);
    }
  }
  let popup: JSX.Element;
  if (props.active[0].status === true) {
    popup = (
      <WrapperPopup
        onClick={() => props.setActive([{ status: false, createIndex: 0 }])}>
        <ContentPopup onClick={(e) => e.stopPropagation()}>
          <HeaderPopup>
            <HederText>Создание карточки</HederText>
            <ButtonCross
              onClick={() =>
                props.setActive([{ status: false, createIndex: 0 }])
              }>
              <ImgPopup src={crossIcon} alt="cross" />
            </ButtonCross>
          </HeaderPopup>
          <form onSubmit={onSubmit}>
            <TextPopup>Тема карточки</TextPopup>
            <ThemeInput
              type="text"
              onChange={onThemeNewCards}
              value={themeNewCards}
              placeholder="Тема"
            />
            <TextPopup>Описание карточки</TextPopup>
            <Textarea
              placeholder="Текст карточки"
              name="inputText"
              onChange={onTextNewCards}
              value={textNewCards}></Textarea>
            <Button>добавить запись</Button>
          </form>
        </ContentPopup>
      </WrapperPopup>
    );
  } else {
    popup = <div></div>;
  }
  return (
    <div>
      <div> {popup}</div>
    </div>
  );
}
export default CreateCardsPopup;
