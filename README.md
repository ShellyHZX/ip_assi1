# Flashcard Learning App

## Table of Contents
- [Project Overview](#project-overview)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Structure](#system-structure)
- [Database Design](#database-design)
- [How to Run](#how-to-run)
- [Preview](#preview)
- [Challenges](#challenges)
- [Notes](#notes)

---

## Project Overview

This project is a single-page web application (SPA) that allows users to create and manage flashcards in an interactive way.  
Users can add, view, edit, and delete flashcards, and review them through a simple and smooth interface.

---

## Problem Statement

When studying, it is often difficult to organise notes and review them efficiently.  
This application helps users structure their learning materials into flashcards and quickly revise them through interaction.

---

## Features

- Create new flashcards (question & answer)
- View flashcards in a carousel interface
- Edit existing flashcards
- Delete flashcards
- Flip animation to reveal answers
- Smooth navigation between cards
- Light/Dark theme switching

---

## Tech Stack

**Frontend**
- React (Vite)

**Backend**
- FastAPI (Python)

**Database**
- MySQL

**Styling**
- CSS

---

## System Structure

The project is organised into frontend and backend parts:

- `/backend` → FastAPI backend and database logic  
- `/src` → React frontend components  
- `main.py` → API routes  
- `models.py` → database schema  

The frontend communicates with the backend through REST APIs, and all data is stored in MySQL.

---

## Database Design

The application uses a simple flashcard table:

- `id` → unique identifier  
- `question` → flashcard question  
- `answer` → flashcard answer  

The backend automatically creates the database (`flashcard_app`) when the server runs.

---

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/ShellyHZX/ip_assi1
cd ip_assi1
