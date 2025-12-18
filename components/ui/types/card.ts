export interface CardProps {
  type: CardType;
  text: string;
}

export enum CardType {
  BLACK = "black",
  WHITE = "white",
}
