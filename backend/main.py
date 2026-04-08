from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
from database import engine, get_session
from models import Flashcard
from sqlmodel import SQLModel

app = FastAPI()

# create the database tables
SQLModel.metadata.create_all(engine)

# allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# get all cards
@app.get("/cards/")
def read_cards(session: Session = Depends(get_session)):
    return session.exec(select(Flashcard)).all()

# add a new card
@app.post("/cards/")
def create_card(card: Flashcard, session: Session = Depends(get_session)):
    session.add(card)
    session.commit()
    session.refresh(card)
    return card

# change a card
@app.put("/cards/{card_id}")
def update_card(card_id: int, updated: Flashcard, session: Session = Depends(get_session)):
    card = session.get(Flashcard, card_id)
    if not card:
        return {"error": "not found"}

    card.question = updated.question
    card.answer = updated.answer

    session.add(card)
    session.commit()
    session.refresh(card)
    return card

# delete a card
@app.delete("/cards/{card_id}")
def delete_card(card_id: int, session: Session = Depends(get_session)):
    card = session.get(Flashcard, card_id)
    if not card:
        return {"error": "not found"}
    session.delete(card)
    session.commit()
    return {"message": "deleted"}