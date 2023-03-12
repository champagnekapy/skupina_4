import React from "react";
import Card from "./Card";

const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const Deck = () => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const newCards = [];

    suits.forEach((suit) => {
      values.forEach((value) => {
        newCards.push({ suit, value });
      });
    });

    setCards(newCards);
  }, []);

  return (
    <div className='deck'>
      {cards.map((card, index) => (
        <Card key={index} suit={card.suit} value={card.value} />
      ))}
    </div>
  );
};

export default Deck;
