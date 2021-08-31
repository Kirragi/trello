import React, { useState } from 'react';
import Column from '../Column';
import CreateCardsPopup from '../CreateCardsPopup';
import CardPopup from '../CardPopup';
import NamePopup from '../NamePopup';
import { NameType, CardType, ColumnType, CommentType } from './entity';
function App() {
  let dataName: NameType[];
  if (localStorage.getItem('name') != null) {
    const nameStr = localStorage.getItem('name') as string;
    dataName = JSON.parse(nameStr) as NameType[];
  } else {
    dataName = [{ status: true, name: ' ' }];
  }
  let dataCards: CardType[];
  if (localStorage.getItem('cards') != null) {
    const cardsStr = localStorage.getItem('cards') as string;
    dataCards = JSON.parse(cardsStr) as CardType[];
  } else {
    dataCards = [
      {
        theme: 'Lorem Ipsum',
        author: 'Andre',
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
        checked: false,
        columnID: 1,
        id: 1,
        changeTheme: false,
        changeText: false,
      },
    ];
  }

  let dataColumn: ColumnType[];
  if (localStorage.getItem('column') != null) {
    const columnStr = localStorage.getItem('column') as string;
    dataColumn = JSON.parse(columnStr) as ColumnType[];
  } else {
    dataColumn = [
      { nameColumn: 'ToDoo', indexColumn: 1, changeColumn: false },
      { nameColumn: 'In Progress', indexColumn: 2, changeColumn: false },
      { nameColumn: 'Testing', indexColumn: 3, changeColumn: false },
      { nameColumn: 'Done', indexColumn: 4, changeColumn: false },
    ];
  }
  let dataComments: CommentType[];
  if (localStorage.getItem('comments') != null) {
    const commentStr = localStorage.getItem('comments') as string;
    dataComments = JSON.parse(commentStr) as CommentType[];
  } else {
    dataComments = [
      {
        idComents: 1,
        idCards: 1,
        authorComents: 'Andre',
        coment:
          'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
        chengeComment: false,
      },
    ];
  }
  const [cards, setCards] = useState(dataCards);
  const [comments, setComments] = useState(dataComments);
  const [column, setColumn] = useState(dataColumn);
  const [name, setName] = useState(dataName);
  dataColumn = column;
  dataCards = cards;
  dataComments = comments;
  dataName = name;
  const [createActive, setCreateActive] = useState([
    { status: false, createIndex: 0 },
  ]);
  const [popupCard, setPopupCard] = useState([{ status: false, cardIndex: 0 }]);
  const [escLisner, setEscLisner] = useState(true);
  const [switchs, setSwitchs] = useState(false);

  function addCard(theme: string, text: string, columnID: number): void {
    const array = dataCards;
    const idMax = [0];
    if (array != []) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id > idMax[0]) {
          idMax[0] = array[i].id;
        }
      }
    }
    const newItem = {
      theme: theme,
      author: name[0].name,
      text: text,
      checked: false,
      columnID: columnID,
      id: idMax[0] + 1,
      changeTheme: false,
      changeText: false,
    };
    const newCards = [newItem, ...dataCards];
    localStorage.setItem('cards', JSON.stringify(newCards));
    setCards(newCards);
    setSwitchs(!switchs);
  }
  function addComments(comment: string, idCards: number): void {
    const array = dataComments;
    const idMax = [0];
    if (array !== []) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].idComents > idMax[0]) {
          idMax[0] = array[i].idComents;
        }
      }
    }
    const newItem = {
      idComents: idMax[0] + 1,
      idCards: idCards,
      authorComents: name[0].name,
      coment: comment,
      chengeComment: false,
    };
    const newComments = [newItem, ...dataComments];
    localStorage.setItem('comments', JSON.stringify(newComments));
    setComments(newComments);
  }
  function onDelete(id: number): void {
    const deletId = cards.findIndex((elem) => elem.id === id);
    const before = cards.slice(0, deletId);
    const after = cards.slice(deletId + 1);
    const newArr = [...before, ...after];
    const clearComments = [] as CommentType[];
    if (dataComments !== []) {
      dataComments.map((item) => {
        if (item.idCards !== id) {
          clearComments.push(item);
        }
      });
      localStorage.setItem('comments', JSON.stringify(newArr));
      setComments(clearComments);
    }
    localStorage.setItem('cards', JSON.stringify(newArr));
    setCards(newArr);
  }
  function onToggleChecked(id: number): void {
    const index = cards.findIndex((elem) => elem.id === id);
    const old = cards[index];
    const newItem = { ...old, checked: !old.checked };
    const newArr = [
      ...cards.slice(0, index),
      newItem,
      ...cards.slice(index + 1),
    ];
    localStorage.setItem('cards', JSON.stringify(newArr));
    setCards(newArr);
  }
  function onDeleteCommets(id: number): void {
    const deletId = comments.findIndex((elem) => elem.idComents === id);
    const before = comments.slice(0, deletId);
    const after = comments.slice(deletId + 1);
    const newArr = [...before, ...after];
    localStorage.setItem('comments', JSON.stringify(newArr));
    setComments(newArr);
  }
  function closeChenge() {
    for (let i = 0; i < dataColumn.length; i++) {
      dataColumn[i].changeColumn = false;
      setColumn(dataColumn);
      setSwitchs(!switchs);
    }
  }
  function changeStatusColumn(id: number) {
    for (let i = 0; i < dataColumn.length; i++) {
      if (dataColumn[i].indexColumn === id) {
        dataColumn[i].changeColumn = true;
      } else {
        dataColumn[i].changeColumn = false;
      }
    }
    setColumn(dataColumn);
    setSwitchs(!switchs);
  }
  function newNameColumn(name: string, id: number) {
    if (name !== '') {
      const index = column.findIndex((elem) => elem.indexColumn === id);
      const old = column[index];
      const newItem = { ...old, nameColumn: name, changeColumn: false };
      const newArr = [
        ...column.slice(0, index),
        newItem,
        ...column.slice(index + 1),
      ];
      dataColumn = newArr;
      setColumn(dataColumn);
      localStorage.setItem('column', JSON.stringify(dataColumn));
    }
  }
  function newThemeCard(name: string, id: number) {
    if (name !== '') {
      const index = cards.findIndex((elem) => elem.id === id);
      const old = cards[index];
      const newItem = { ...old, theme: name, changeTheme: false };
      const newArr = [
        ...cards.slice(0, index),
        newItem,
        ...cards.slice(index + 1),
      ];
      dataCards = newArr;
      setCards(dataCards);
      localStorage.setItem('cards', JSON.stringify(dataCards));
    }
  }
  function newTextCard(text: string, id: number) {
    if (text !== '') {
      const index = cards.findIndex((elem) => elem.id === id);
      const old = cards[index];
      const newItem = { ...old, text: text, changeText: false };
      const newArr = [
        ...cards.slice(0, index),
        newItem,
        ...cards.slice(index + 1),
      ];
      dataCards = newArr;
      setCards(dataCards);
      localStorage.setItem('cards', JSON.stringify(dataCards));
    }
  }
  function newTextComment(text: string, id: number) {
    if (text !== '') {
      const index = comments.findIndex((elem) => elem.idComents === id);
      const old = comments[index];
      const newItem = { ...old, coment: text, chengeComment: false };
      const newArr = [
        ...comments.slice(0, index),
        newItem,
        ...comments.slice(index + 1),
      ];
      dataComments = newArr;
      setComments(dataComments);
      localStorage.setItem('comments', JSON.stringify(dataComments));
    }
  }
  function addListen() {
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        closeChenge();
        setCreateActive([{ status: false, createIndex: 0 }]);
        setPopupCard([{ status: false, cardIndex: 0 }]);
        setSwitchs(!switchs);
      }
    });
  }
  if (escLisner === true) {
    addListen();
    setEscLisner(false);
  }
  return (
    <div>
      <NamePopup name={name} setName={setName} />
      <Column
        newNameColumn={newNameColumn} //todo
        dataCards={cards}
        dataColumn={column}
        setColumn={setColumn}
        changeStatusColumn={changeStatusColumn}
        active={createActive}
        setActive={setCreateActive}
        onDelete={onDelete}
        onToggleChecked={onToggleChecked}
        setPopupCard={setPopupCard}
        switchs={switchs}
        setSwitchs={setSwitchs}
        comments={comments}
      />
      <CreateCardsPopup
        setPopupCard={setPopupCard}
        active={createActive}
        setActive={setCreateActive}
        addCard={addCard}
      />
      <CardPopup
        dataCards={cards}
        dataColumn={column}
        comments={comments}
        popupCard={popupCard}
        setPopupCard={setPopupCard}
        addComments={addComments}
        onDeleteCommets={onDeleteCommets}
        switchs={switchs}
        setSwitchs={setSwitchs}
        newThemeCard={newThemeCard}
        newTextCard={newTextCard}
        newTextComment={newTextComment}
      />
    </div>
  );
}
export default App;
