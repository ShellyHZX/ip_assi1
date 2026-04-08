# Flashcard Learning App

## Project Description

This is a single-page web application (SPA) that allows users to create and manage flashcards. Users can add, view, edit, and delete flashcards in an interactive way.

## Problem Solved

This app helps users organise and review learning materials efficiently using flashcards.

## Tech Stack

* Frontend: React (Vite)
* Backend: FastAPI
* Database: MySQL
* Styling: CSS

## Features

* Add flashcards (Create)
* View flashcards (Read)
* Edit flashcards (Update)
* Delete flashcards (Delete)
* Flip animation for cards
* Carousel UI navigation
* Theme switching

## Folder Structure

* `/backend` → FastAPI backend & database logic
* `/src` → React frontend components
* `main.py` → API routes
* `models.py` → database schema

## How to Run

### 1. Database setup

First, log into MySQL:
```bash 
mysql -u root
```

Then run these SQL commands:

```
CREATE USER 'flashuser'@'localhost' IDENTIFIED BY 'flashpass';
GRANT ALL PRIVILEGES ON *.* TO 'flashuser'@'localhost';
FLUSH PRIVILEGES;
```

Enter ```exit``` to leave MySQL

### 2. Backend setup

Install backend dependencies
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8002
```
You need: fastapi, uvicorn, sqlmodel, pymysql

### 3. Frontend setup

```bash
npm install
npm run dev
```

### 4. Open in browser

http://localhost:5173

## Notes

* Backend runs on port 8002
* If port changes, update fetch URLs in frontend

## Challenges

One challenge was connecting the frontend and backend APIs and ensuring CRUD operations worked smoothly. Another challenge was managing UI interactions such as card flipping and carousel movement.
