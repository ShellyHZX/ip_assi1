// import react
import { useState, useRef } from "react";
import Flashcard from "./Flashcard";

// component for showing the list of cards
function FlashcardList({ cards, setCards, onEdit }) {
    // state for which card is showing
    const [current, setCurrent] = useState(0);
    const startX = useRef(0);
    const isDragging = useRef(false);

    // if no cards, show message
    if (cards.length === 0) {
        return <div style={{ textAlign: "center" }}>No cards yet. Add one!</div>;
    }

    // function to delete a card
    const handleDelete = (id) => {
        // ask user to confirm
        if (window.confirm("Delete this card?")) {
            // send delete to server
            // change 8002 if your backend port is different
            fetch(`http://127.0.0.1:8002/cards/${id}`, {
                method: "DELETE"
            })
            .then(() => {
                setCards(prev => prev.filter(card => card.id !== id));
            })
            .catch(err => console.error(err));
        }
    };

    return (
    <div
      className="carousel"
      onMouseDown={(e) => {
        startX.current = e.clientX;
        isDragging.current = true;
      }}
      onMouseMove={(e) => {
        if (!isDragging.current) return;

        const diff = e.clientX - startX.current;

        setCurrent((prev) => prev - diff / 200);

        startX.current = e.clientX;
      }}
      onMouseUp={() => {
        isDragging.current = false;
        setCurrent((prev) => Math.round(prev));
      }}
      onMouseLeave={() => {
        isDragging.current = false;
      }}
    >
      {/* arrows */}
      <button
        className="arrow left"
        onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
      >
        ◀
      </button>

      <button
        className="arrow right"
        onClick={() =>
          setCurrent((prev) => Math.min(prev + 1, cards.length - 1))
        }
      >
        ▶
      </button>

      {/* cards */}
      {cards.map((card, index) => {
        const offset = index - current;
        const isCenter = Math.abs(offset) < 0.5;

        return (
          <div
            key={card.id}
            className="card-wrapper"
            style={{
                transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 180}px)
                    scale(${isCenter ? 1.3 : 0.85})
                    rotate(${offset * 5}deg)
                `,
                zIndex: isCenter ? 1000 : 100 - Math.abs(offset),
            }}
            onClick={() => {
              if (!isCenter) setCurrent(index);
            }}
          >
            <Flashcard
            card={card}
            onDelete={handleDelete}
            onEdit={onEdit}
            isActive={index === Math.round(current)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FlashcardList;