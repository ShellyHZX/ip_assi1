import os
import pymysql
from sqlmodel import SQLModel, create_engine, Session

DB_USER = "flashuser"
DB_PASS = "flashpass"
DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
DB_PORT = os.getenv("DB_PORT", "3306")
DB_NAME = os.getenv("DB_NAME", "flashcard_app")

# create database if not exists
def ensure_database():
    conn = pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASS,
        port=int(DB_PORT),
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor,
    )
    try:
        with conn.cursor() as cursor:
            cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{DB_NAME}` DEFAULT CHARACTER SET utf8mb4")
        conn.commit()
    finally:
        conn.close()

ensure_database()

DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=True)

# function to get database session
def get_session():
    with Session(engine) as session:
        yield session
