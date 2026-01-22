import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader"
import { useState, useEffect } from 'react';

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];
function App() {
const [cards, setCards] = useState([]);
const [flippedCards, setFlippedCards] = useState([]);
const [matchedCards, setMatchedCards] = useState([]);


const initializeGame = () => {
  // suffle the cards

  const finalCards = cardValues.map((value, index) => ({

    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));

  setCards(finalCards);
};

useEffect(() => {
  initializeGame();
}, []);


const handleCardClick = (card) => {
  // don't allow cliking if the the card is already flipped, matched
  if (card.isFlipped || card.isMatched) {
    return;
  }

  // update card flipped state
  const newCards = cards.map((c) => {
    if (c.id === card.id) {
      return { ...c, isFlipped: true};
    } else {
      return c;
    }
  });

  setCards(newCards);

  const newFlippedCards = [...flippedCards, card.id];
  setFlippedCards(newFlippedCards);

  // check for match if two card are flipped

  if (flippedCards.length === 1) {
    const firstCard = cards.find(c => c.id === flippedCards[0]);

    if (firstCard.value === card.value) {
      setTimeout(() => {
     setMatchedCards((prev) => [...prev, firstCard.id, card.id]);

  //    const newMatchedCards = cards.map((c) => {
  //   if (c.id === card.id || c.id === firstCard.id) {
  //     return { ...c, isMatched: true};
  //   } else {
  //     return c;
  //   }
  // });

  setCards( (prev) =>
     prev.map((c) => {
    if (c.id === card.id || c.id === firstCard.id) {
      return { ...c, isMatched: true};
    } else {
      return c;
    }
  })
      );
  setFlippedCards([]);
      }, 500);
    } else {
      // flip back card1, card2

      setTimeout(() => {
      const flippedBackCard = newCards.map((c) => {
        if (newFlippedCards.includes(c.id) || c.id === card.id) {
          return {...c, isFlipped: false};
        } else {
          return c;
        }
      });

      setCards(flippedBackCard);

      setFlippedCards([]);
      }, 1000)
    }
  }
};

  return (
    <div className="app">
      <GameHeader  score={3} moves={10}/>

      <div className="cards-grid">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleCardClick}/>
          ))}
      </div>
    </div>
  );
}

export default App;
