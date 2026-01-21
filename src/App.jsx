import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader"
import { useState } from 'react';

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
const [card, setCards] = useState([])

const initializeGame = () => {
  // suffle the cards

  setCards(cardValues.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }

  )));

  console.log(finalCards);
};

  return (
    <div className="app">
      <GameHeader  score={3} moves={10}/>

      <div className="cards-grid">
          {cardValues.map((card) => (
            <Card card={card}/>
          ))}
      </div>
    </div>
  );
}

export default App;
