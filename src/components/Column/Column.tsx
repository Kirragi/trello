import React, { useState } from 'react';
import Cards from '../Cards';
import ChengeIcon from '../assets/img/ChengeIcon.png';
import plusIcon from '../assets/img/plus.png';
import { ColumnProps } from '../app/entity';
import {
  NameColumn,
  ImgColumn,
  ButtonChenge,
  ButtonPlus,
  Flex,
  ButtonColumn,
  InputName,
  ChengeWraper,
  ColumnWraper,
  ColumnContent,
  CardsItem,
} from './columnStyling';
function Column(props: ColumnProps) {
  const [newNameColumn, setNameColumn] = useState('');
  function onNewNameColumn(e: React.FormEvent<HTMLInputElement>): void {
    setNameColumn(e.currentTarget.value);
  }
  function onChenge(value: string, indexCol: number) {
    props.changeStatusColumn(indexCol);
    setNameColumn(value);
  }
  const elementsColumn = props.dataColumn.map((itemColumn) => {
    const { nameColumn, indexColumn } = itemColumn;
    let change: JSX.Element;
    if (itemColumn.changeColumn === false) {
      change = (
        <div>
          <Flex>
            <NameColumn>{nameColumn}</NameColumn>
            <ButtonChenge
              onClick={() =>
                onChenge({ nameColumn }.nameColumn, itemColumn.indexColumn)
              }>
              <ImgColumn src={ChengeIcon} alt="chenge" />
            </ButtonChenge>
            <ButtonPlus
              onClick={() =>
                props.setActive([
                  { status: true, createIndex: { indexColumn }.indexColumn },
                ])
              }>
              <ImgColumn src={plusIcon} alt="plus" />
            </ButtonPlus>
          </Flex>
        </div>
      );
    } else {
      change = (
        <div>
          <ChengeWraper>
            <InputName
              type="text"
              defaultValue={nameColumn}
              onChange={onNewNameColumn}
            />
            <ButtonColumn
              onClick={() =>
                props.newNameColumn(newNameColumn, itemColumn.indexColumn)
              }>
              Изменить
            </ButtonColumn>
          </ChengeWraper>
        </div>
      );
    }
    const elements = props.dataCards.map((itemCards) => {
      const card = itemCards;
      if (itemCards.columnID === { indexColumn }.indexColumn) {
        return (
          <CardsItem key={itemCards.id}>
            <Cards
              cards={props.dataCards}
              card={card}
              onDelete={() => props.onDelete(itemCards.id)}
              onToggleChecked={() => props.onToggleChecked(itemCards.id)}
              setPopupCard={props.setPopupCard}
              switchs={props.switchs}
              setSwitchs={props.setSwitchs}
              comments={props.comments}
            />
          </CardsItem>
        );
      }
    });
    return (
      <ColumnContent key={indexColumn}>
        {change}
        {elements}
      </ColumnContent>
    );
  });
  return <ColumnWraper>{elementsColumn}</ColumnWraper>;
}
export default Column;
