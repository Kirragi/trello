import React from 'react';
import trashIcon from '../assets/img/trash.png';
import openIcon from '../assets/img/open.png';
import closeIcon from '../assets/img/close.png';
import { CardProps } from '../app/entity';
import {
  CardWraper,
  ButtonCards,
  ImgCards,
  ButtonWraper,
  ThemeColumn,
  FooterCard,
} from './cardsStyling';
function Cards(props: CardProps) {
  let checedIcons: JSX.Element;
  if (props.card.checked) {
    checedIcons = <ImgCards src={openIcon} alt="checked" />;
  } else {
    checedIcons = <ImgCards src={closeIcon} alt="checked" />;
  }
  const CardIndex = props.cards.findIndex((elem) => elem.id === props.card.id);
  function openPopup() {
    props.setPopupCard([{ status: true, cardIndex: props.card.id }]);
    props.cards[CardIndex].changeText = false;
    props.cards[CardIndex].changeTheme = false;
    for (let i = 0; i < props.comments.length; i++) {
      props.comments[i].chengeComment = false;
    }
    props.setSwitchs(!props.switchs) as void;
  }
  const colComment = [0];
  props.comments.map((item) => {
    if (item.idCards === props.card.id) {
      colComment[0] += 1;
    }
  });
  return (
    <CardWraper onClick={() => openPopup()}>
      <div className="card__info-wrapper">
        <ThemeColumn>{props.card.theme}</ThemeColumn>
        <p className="card__autor">Автор: {props.card.author}</p>
        <div className="card__text-wrapper">
          <span className="card__text">{props.card.text}</span>
        </div>
      </div>
      <FooterCard>
        <p>Комментарии:{colComment}</p>
        <ButtonWraper>
          <div onClick={(e) => e.stopPropagation()}>
            <ButtonCards onClick={() => props.onToggleChecked(props.card.id)}>
              {checedIcons}
            </ButtonCards>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <ButtonCards onClick={() => props.onDelete(props.card.id)}>
              <ImgCards src={trashIcon} alt="trash" />
            </ButtonCards>
          </div>
        </ButtonWraper>
      </FooterCard>
    </CardWraper>
  );
}
export default Cards;
