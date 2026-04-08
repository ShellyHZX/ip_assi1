# Flashcard Learning App

## Project Overview
This project is a **single-page web application (SPA)** designed to help users create and manage flashcards for study purposes.

Users can interact with flashcards dynamically — including creating, viewing, updating, and deleting cards — without reloading the page.

This project follows the assignment requirement of building a **real-world interactive web application with full CRUD functionality and database integration** :contentReference[oaicite:0]{index=0}.

---

## Problem Statement
Many students struggle to organise and review learning materials efficiently.

Traditional methods (notes, static documents) are:
- Hard to review repeatedly  
- Not interactive  
- Not engaging for memory retention  

This application solves the problem by providing:
- A simple way to create flashcards  
- Interactive review through flipping cards  
- A clean and focused study interface  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- CSS (custom styling)

### Backend
- FastAPI (Python)

### Database
- MySQL

### Other Tools
- Uvicorn (server)
- SQLModel + PyMySQL (database connection)

---

## Key Features

- Create flashcards (Add questions & answers)  
- Read flashcards (View all cards)  
- Update flashcards (Edit existing cards)  
- Delete flashcards  
- Card flip animation for interactive learning  
- Carousel navigation for smooth browsing  
- Theme switching (light/dark mode)  

These features ensure full **CRUD operations**, which is a core requirement of the assignment :contentReference[oaicite:1]{index=1}.

---

## System Design & SPA Behaviour

This app is designed as a **Single-Page Application (SPA)**:

- Only one main page is used  
- Content is dynamically updated using React components  
- No full page reload is required  

This creates a **smooth and seamless user experience**, as required in the rubric.

---

## 📂 Folder Structure
