export type NameType = {
  status: boolean;
  name: string;
};
export type CardType = {
  theme: string;
  author: string;
  text: string;
  checked: boolean;
  columnID: number;
  id: number;
  changeTheme: boolean;
  changeText: boolean;
};
export type ColumnType = {
  nameColumn: string;
  indexColumn: number;
  changeColumn: boolean;
};
export type CommentType = {
  idCards: number;
  idComents: number;
  authorComents: string;
  coment: string;
  chengeComment: boolean;
};
export type CreateActiveType = {
  status: boolean;
  createIndex: number;
};
export type PopupCardType = {
  status: boolean;
  cardIndex: number;
};
export interface CardPopupProps {
  dataCards: CardType[];
  dataColumn: ColumnType[];
  comments: CommentType[];
  popupCard: PopupCardType[];
  setPopupCard(popupCard: PopupCardType[]): void;
  addComments(comment: string, idCards: number): void;
  onDeleteCommets(id: number): void;
  switchs: boolean;
  setSwitchs(switchs: boolean): void;
  newThemeCard(name: string, id: number): void;
  newTextCard(text: string, id: number): void;
  newTextComment(text: string, id: number): void;
}
export interface CardProps {
  cards: CardType[];
  card: CardType;
  onDelete(id: number): void;
  onToggleChecked(id: number): void;
  setPopupCard(popupCard: PopupCardType[]): void;
  comments: CommentType[];
  switchs: boolean;
  setSwitchs(switchs: boolean): void;
}
export interface ColumnProps {
  dataCards: CardType[];
  dataColumn: ColumnType[];
  active: CreateActiveType[];
  setColumn(column: ColumnType[]): void;
  setActive(active: CreateActiveType[]): void;
  setPopupCard(popupCard: PopupCardType[]): void;
  comments: CommentType[];
  onDelete(id: number): void;
  onToggleChecked(id: number): void;
  changeStatusColumn(id: number): void;
  newNameColumn(name: string, id: number): void;
  switchs: boolean;
  setSwitchs(switchs: boolean): void;
}
export interface CreateCardsProps {
  active: CreateActiveType[];
  setActive(active: CreateActiveType[]): void;
  addCard(theme: string, text: string, columnID: number): void;
  setPopupCard(popupCard: PopupCardType[]): void;
}
export interface NameProps {
  name: NameType[];
  setName(name: NameType[]): void;
}
