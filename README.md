# Flashcard Learning App

## Project Description

This is a single-page web application (SPA) that allows users to create and manage flashcards. Users can add, view, edit, and delete flashcards in an interactive way.

## Problem Solved

This app helps students efficiently organise and review study materials using interactive flashcards.

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

## Quick Start

1. Setup database
2. Run backend server (FastAPI)
3. Run frontend (React)
4. Open browser at http://localhost:5173
---

To get my project:
```
git clone https://github.com/ShellyHZX/ip_assi1
cd ip_assi1
```

### 1. Database setup

Login to MySQL as root:

```mysql -u root -p```

Create a user:

```
CREATE USER 'flashuser'@'localhost' IDENTIFIED BY 'flashpass';
GRANT ALL PRIVILEGES ON *.* TO 'flashuser'@'localhost';
FLUSH PRIVILEGES;
```

First, log in to MySQL:
```bash 
mysql -u flashuser -p
```
password: flashpass

The database `flashcard_app` will be automatically created when running the backend.

Enter ```exit``` to leave MySQL

### 2. Backend setup

Install backend dependencies
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8002
```
You need: fastapi, uvicorn, sqlmodel, pymysql

API can be checked in: ```http://127.0.0.1:8002/docs```

### 3. Frontend setup

Open a new terminal, go to the project folder
```cd ip_assi1```

then use this cmd:
```bash
npm install
npm run dev
```

### 4. Open in browser

http://localhost:5173

### then, enjoy!

## Notes

* Backend runs on port 8002
* If port changes, update fetch URLs in frontend
* Uvicorn running on: http://127.0.0.1:8002
* You can verify the API at: http://127.0.0.1:8002/docs

## Challenges

One challenge in this project was connecting the frontend and backend properly, especially handling API requests and ensuring data stays consistent after each CRUD operation.

Another difficulty was implementing the card flip animation together with the carousel navigation. It required careful control of UI states to avoid unexpected behaviour.

In addition, managing React state while keeping the interface responsive took some trial and error, especially when updating or deleting flashcards.
