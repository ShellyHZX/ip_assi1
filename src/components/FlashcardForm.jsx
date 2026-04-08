// import react stuff
import { useState, useEffect } from "react";

// component for making new cards
function FlashcardForm({ cards, setCards }) {
    // state for question and answer
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [alart, setAlart] = useState({text: "", type: ""});

    // hide the alert after some time
    useEffect(() => {
        if (!alart) return;
        const timer = setTimeout(() => {
            setAlart({text:"", type:""});
        }, 2000);
        return () => clearTimeout(timer);
        }, [alart]);

    // when user submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // check if question is not empty
        if (question.trim().length < 1) {
            setAlart({ text:"Question needed", type:"error"});
            return;
            }

        // check if answer is not empty
        if (answer.trim().length < 1) {
            setAlart({ text:"Answer needed", type: "error"});
            return;
            }
        
        // check if too many cards
        if (cards.length >= 50) {
            setAlart({ text: "Maximum cards reached", type:"error"});
            return;
            }

        // send to server to add card
        // change 8002 if your backend port is different
    fetch(`http://127.0.0.1:8002/cards/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question, answer })
    })
        .then(res => res.json())
        .then(newCard => {
            setCards(prev => [...prev, newCard]);
            setQuestion("");
            setAnswer("");
            setAlart({ text: "Card added!", type: "success" });
        })
        .catch(() => {
            setAlart({ text: "Failed to add card", type: "error" });
        });
    };

    return (
    <>
    <form onSubmit={handleSubmit} className="form-container">

        <div className="input-row">
        <textarea
            className="input-box"
            placeholder="Write your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
        />

        <textarea
            className="input-box"
            placeholder="Write the answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
        />

        <button className="add-btn" type="submit">
            ✚
        </button>
        </div>
    </form>
    {alart.text && (
    <div className={`alart ${alart.type}`}>
        {alart.text} 
    </div>
    )}
    </>
    );
}

export default FlashcardForm;