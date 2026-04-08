from sqlmodel import SQLModel, Field

# this is the card model
class Flashcard(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)  # id for each card
    question: str
    answer: str