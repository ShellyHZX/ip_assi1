// import react stuff
import { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import FlashcardForm from "./components/FlashcardForm";
import "./App.css";

// main app function
function App() {
  // some default cards for example
  const defaultCards = [
    { id: 1, question: "What is React?", answer: "A JavaScript library for building UI" },
    { id: 2, question: "What is a Hook?", answer: "A function to use state and lifecycle in React" },
    { id: 3, question: "What is JavaScript?", answer: "A programming language for web development" },
    { id: 4, question: "What is Visual Studio Code?", answer: "A source-code editor by Microsoft" },
  ];

  // state for the cards
  const [cards, setCards] = useState([]);

  // function to edit a card
  const handleEdit = (id, newQuestion, newAnswer) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, question: newQuestion, answer: newAnswer } : card
      )
    );
  };

  // state for theme
  const [theme, setTheme] = useState("theme-dark");
  const [showTheme, setShowTheme] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // load cards from the server when start
  // if your backend port is different, change 8002 to your port
  useEffect(() => {
  fetch(`http://127.0.0.1:8002/cards/`)
    .then(res => res.json())
    .then(data => setCards(data))
    .catch(err => console.error(err));
  }, []);

  // change the body class for theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <h1 className="title">✐ Study Card ✎</h1>

      <div className="card-section">
        <FlashcardList cards={cards} setCards={setCards} onEdit={handleEdit} />
      </div>

      <div className="form-section">
        <FlashcardForm cards={cards} setCards={setCards} />
      </div>

      <button className="help-btn" onClick={() => setShowHelp(!showHelp)}>
        ⚙︎
      </button>

      {showHelp && (
        <div className="help-panel">
          <div className="help-item">Slide ⇆ or ◀︎ Click ▶︎</div>
          <div className="help-item">Click to Flip ↺ and Remove 𒒬</div>
          <div className="help-item">Add cards below ✚</div>
        </div>
      )}

      <button className="theme-btn" onClick={() => setShowTheme(!showTheme)}>
        ⚛︎
      </button>

      {showTheme && (
        <div className="theme-panel">
          <button onClick={() => setTheme("theme-dark")} />
          <button onClick={() => setTheme("theme-pink")} />
          <button onClick={() => setTheme("theme-green")} />
          <button onClick={() => setTheme("theme-orange")} />
          <button onClick={() => setTheme("theme-gray")} />
        </div>
      )}
    </div>
  );
}

export default App;
