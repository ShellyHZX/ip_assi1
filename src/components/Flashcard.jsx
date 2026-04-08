// import react
import { useState, useEffect } from "react";
import "./Flashcard.css";

// component for one card
function Flashcard({ card, onEdit, onDelete, isActive }) {
    // state for if card is flipped
    const [flipped, setFlipped] = useState(false);
    
    // function to update the card
    const handleUpdate = (id, newQuestion, newAnswer) => {
        // send update to server
        // change 8002 if your backend port is different
    fetch(`http://127.0.0.1:8002/cards/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        question: newQuestion,
        answer: newAnswer
        })
    })
        .then(res => res.json())
        .then(updated => {
            onEdit(id, newQuestion, newAnswer);
            alert("Card updated successfully!");
            })
        .catch(err => console.error(err));
    };

    // reset flip when not active
    useEffect(() => {
        if (!isActive) {
        setFlipped(false);
        }
    }, [isActive]);

    const handleClick = (e) => {
        e.stopPropagation();

        if (isActive === false) return;

        if (!flipped) {
            setFlipped(true);
        } else {
            onDelete(card.id);
            }
    };

  return (
    <div className="card-container" onClick={handleClick}>
        <div className={`card ${flipped ? "flipped" : ""}`}>
            <div className="front">
                <button
                    className="edit-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        const newQuestion = prompt("Edit question:", card.question);
                        if (newQuestion && newQuestion.trim() !== "") {
                            handleUpdate(card.id, newQuestion, card.answer);
                        }
                        }}>✎</button>
                <h3>{card.question}</h3>
            </div>
            <div className="back">
                <button
                    className="edit-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        const newAnswer = prompt("Edit answer:", card.answer);
                        if (newAnswer && newAnswer.trim() !== "") {
                            handleUpdate(card.id, card.question, newAnswer);
                        }
                        }}>✎</button>
            <p>{card.answer}</p>
            </div>
      </div>
    </div>
  );
}

export default Flashcard;