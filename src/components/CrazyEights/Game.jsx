import React from "react";
import Deck from "./Deck";

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

const Game = () => {
  const [deck, setDeck] = React.useState([]);
  const [discard, setDiscard] = React.useState([]);
  const [hand, setHand] = React.useState([]);

  React.useEffect(() => {
    const newDeck = [];

    suits.forEach((suit) => {
      values.forEach((value) => {
        newDeck.push({ suit, value });
      });
    });

    setDeck(newDeck);
  }, []);

  const deal = () => {
    const newHand = [...hand];
    while (newHand.length < 8 && deck.length > 0) {
      newHand.push(deck.pop());
    }
    setHand(newHand);
  };

  const draw = () => {
    const newHand = [...hand];
    if (deck.length > 0) {
      newHand.push(deck.pop());
    }
    setHand(newHand);
  };

  const playCard = (index) => {
    const newHand = [...hand];
    const card = newHand[index];
    const topCard = discard[discard.length - 1];

    if (
      card.suit === topCard.suit ||
      card.value === topCard.value ||
      card.value === "8"
    ) {
      newHand.splice(index, 1);
      setHand(newHand);
      setDiscard([...discard, card]);
    }
  };

  return (
    <div className='game'>
      <div className='hand'>
        {hand.map((card, index) => (
          <div key={index} className='card' onClick={() => playCard(index)}>
            <div className={`card-suit ${card.suit}`}>{card.suit}</div>
            <div className='card-value'>{card.value}</div>
          </div>
        ))}
        <button onClick={draw}>Draw</button>
      </div>
      <div className='discard'>
        {discard.length > 0 && (
          <div className='card' onClick={() => playCard(discard.length - 1)}>
            <div className={`card-suit ${discard[discard.length - 1].suit}`}>
              {discard[discard.length - 1].suit}
            </div>
            <div className='card-value'>
              {discard[discard.length - 1].value}
            </div>
          </div>
        )}
      </div>
      <Deck />
      <button onClick={deal}>Deal</button>
    </div>
  );
};

export default Game;
