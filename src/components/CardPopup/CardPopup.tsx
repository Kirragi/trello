import React, { useState } from 'react';
import ChengeIcon from '../assets/img/ChengeIcon.png';
import crossIcon from '../assets/img/cross.png';
import trashIcon from '../assets/img/trash.png';
import { CardPopupProps } from '../app/entity';
import {
  WrapperPopup,
  HeaderPopup,
  ContentPopup,
  ButtonCross,
  ImgCross,
  ThemeText,
  ThemeWrapper,
  ImgTheme,
  ImgText,
  ButtonChenge,
  InputTheme,
  ButtonTheme,
  Textarea,
  ButtonText,
  InputComment,
  ButtonComment,
  CommentWrapper,
  ButtonTrash,
  CommentHeader,
} from './cardPopupStyling';
function CardPopup(props: CardPopupProps) {
  const [inputComent, setInputComent] = useState('');
  const [newTheme, setNewTheme] = useState('');
  const [newText, setNewText] = useState('');
  const [valueComment, setValueComment] = useState('');
  function onInputComent(e: React.FormEvent<HTMLInputElement>): void {
    setInputComent(e.currentTarget.value);
  }

  function onNewText(e: React.FormEvent<HTMLTextAreaElement>): void {
    setNewText(e.currentTarget.value);
  }
  function onNewTheme(e: React.FormEvent<HTMLInputElement>): void {
    setNewTheme(e.currentTarget.value);
  }
  function onValueComment(e: React.FormEvent<HTMLInputElement>): void {
    setValueComment(e.currentTarget.value);
  }
  const dataPopup = props.dataCards.find(
    (elem) => elem.id === props.popupCard[0].cardIndex,
  );
  const CardIndex = props.dataCards.findIndex(
    (elem) => elem.id === props.popupCard[0].cardIndex,
  );
  let nameColumn = '' as string;
  props.dataColumn.map((item) => {
    if (item.indexColumn === dataPopup?.columnID) {
      nameColumn = item.nameColumn;
    }
  });
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputComent !== '') {
      props.addComments(inputComent, props.popupCard[0].cardIndex);
      setInputComent('');
    }
  }
  function switchTheme(value: string) {
    props.dataCards[CardIndex].changeTheme = true;
    props.dataCards[CardIndex].changeText = false;
    for (let i = 0; i < props.comments.length; i++) {
      props.comments[i].chengeComment = false;
    }
    props.setSwitchs(!props.switchs);
    setNewTheme(value);
  }
  function switchText(value: string) {
    props.dataCards[CardIndex].changeText = true;
    props.dataCards[CardIndex].changeTheme = false;
    for (let i = 0; i < props.comments.length; i++) {
      props.comments[i].chengeComment = false;
    }
    props.setSwitchs(!props.switchs);
    setNewText(value);
  }
  function closePopup() {
    props.dataCards[CardIndex].changeText = false;
    props.dataCards[CardIndex].changeTheme = false;
    props.setPopupCard([{ status: false, cardIndex: 0 }]);
  }
  function switchsComment(id: number, value: string) {
    for (let i = 0; i < props.comments.length; i++) {
      if (props.comments[i].idComents === id) {
        props.comments[i].chengeComment = true;
      } else {
        props.comments[i].chengeComment = false;
      }
    }
    setValueComment(value);
    props.dataCards[CardIndex].changeText = false;
    props.dataCards[CardIndex].changeTheme = false;
    props.setSwitchs(!props.switchs);
  }
  let statusComment: JSX.Element;

  const comment = props.comments.map((itemComent) => {
    if (itemComent.idCards === props.popupCard[0].cardIndex) {
      if (itemComent.chengeComment === false) {
        statusComment = (
          <div>
            <span>{itemComent.coment}</span>
            <ButtonChenge
              onClick={() =>
                switchsComment(itemComent.idComents, itemComent.coment)
              }>
              <ImgText src={ChengeIcon} alt="chenge" />
            </ButtonChenge>
          </div>
        );
      } else {
        statusComment = (
          <div>
            <InputComment
              type="text"
              defaultValue={itemComent.coment}
              onChange={onValueComment}
            />
            <ButtonComment
              onClick={() =>
                props.newTextComment(valueComment, itemComent.idComents)
              }>
              Изменить
            </ButtonComment>
          </div>
        );
      }
      return (
        <CommentWrapper key={itemComent.idComents}>
          <CommentHeader>
            <p>Автор: {itemComent.authorComents}</p>
            <ButtonTrash
              onClick={() => props.onDeleteCommets(itemComent.idComents)}>
              <ImgTheme src={trashIcon} alt="trash" />
            </ButtonTrash>
          </CommentHeader>
          {statusComment}
        </CommentWrapper>
      );
    }
  });
  let statusTheme: JSX.Element;
  if (dataPopup?.changeTheme === false) {
    statusTheme = (
      <ThemeWrapper>
        <ThemeText>{dataPopup?.theme}</ThemeText>
        <ButtonChenge onClick={() => switchTheme(dataPopup?.theme)}>
          <ImgTheme src={ChengeIcon} alt="chenge" />
        </ButtonChenge>
      </ThemeWrapper>
    );
  } else {
    statusTheme = (
      <div>
        <InputTheme
          type="text"
          defaultValue={dataPopup?.theme}
          onChange={onNewTheme}
        />
        <ButtonTheme
          onClick={() =>
            props.newThemeCard(newTheme, props.dataCards[CardIndex].id)
          }>
          Изменить
        </ButtonTheme>
      </div>
    );
  }
  let statusText: JSX.Element;
  if (dataPopup?.changeText === false) {
    statusText = (
      <div>
        <span>{dataPopup?.text}</span>
        <ButtonChenge onClick={() => switchText(dataPopup?.text)}>
          <ImgText src={ChengeIcon} alt="chenge" />
        </ButtonChenge>
      </div>
    );
  } else {
    statusText = (
      <div>
        <Textarea defaultValue={dataPopup?.text} onChange={onNewText} />
        <ButtonText
          onClick={() =>
            props.newTextCard(newText, props.dataCards[CardIndex].id)
          }>
          Изменить
        </ButtonText>
      </div>
    );
  }
  let popup: JSX.Element;
  if (props.popupCard[0].status === true) {
    popup = (
      <WrapperPopup onClick={() => closePopup()}>
        <ContentPopup onClick={(e) => e.stopPropagation()}>
          <HeaderPopup>
            <span>Колонка: {nameColumn}</span>
            <ButtonCross onClick={() => closePopup()}>
              <ImgCross src={crossIcon} alt="cross" />
            </ButtonCross>
          </HeaderPopup>
          {statusTheme}
          <p>Автор: {dataPopup?.author}</p>
          {statusText}
          <form onSubmit={onSubmit}>
            <p>Добавление комментария</p>
            <InputComment
              type="text"
              onChange={onInputComent}
              value={inputComent}
              placeholder="Ваш комментарий"
            />
            <ButtonComment>Добавить</ButtonComment>
          </form>
          <p>Комментарии</p>
          {comment}
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
export default CardPopup;
