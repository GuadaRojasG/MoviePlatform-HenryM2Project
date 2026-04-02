# 🎬 Cinema App

A full-stack movie management application built with Node.js, Express, MongoDB and Vanilla JavaScript.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

---

## 📖 About

Cinema App allows users to browse, create and manage movies and actors through a clean and dynamic interface. The project is divided into two main parts: a **REST API backend** and a **Vanilla JS frontend**.

---

## ✨ Features

- 🎥 Browse a list of movies
- ➕ Create new movies with a form
- 🎭 Explore actors section
- 🔗 REST API with full CRUD operations
- 📦 Frontend bundled with Webpack

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

### Frontend
- Vanilla JavaScript
- HTML5 & CSS3
- Webpack

---

## 📁 Project Structure

```
MoviePlatform-HenryM2Project/
├── back/
│   ├── index.js
│   ├── src/
│   │   ├── server.js
│   │   ├── controllers/
│   │   │   └── movies.controller.js
│   │   ├── db/
│   │   │   └── dbConfig.js
│   │   ├── middlewares/
│   │   ├── models/
│   │   │   └── Movies.js
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   └── movies.router.js
│   │   └── services/
│   │       └── movies.service.js
└── front/
    ├── index.html
    ├── webpack.config.js
    ├── pages/
    │   ├── movies.html
    │   ├── actors.html
    │   └── create-movie.html
    ├── scripts/
    │   ├── index.js
    │   ├── fetchData.js
    │   ├── JStoHTML.js
    │   └── createMovieForm.js
    └── styles/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/GuadaRojasG/MoviePlatform-HenryM2Project.git
cd MoviePlatform-HenryM2Project
```

2. **Setup Backend**
```bash
cd back
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and PORT
```

4. **Start the server**
```bash
npm start
```

5. **Setup Frontend**
```bash
cd ../front
npm install
npm run build
```

6. **Open the app**

Open `front/index.html` in your browser or serve it with a local server.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/movies` | Get all movies |
| GET | `/movies/:id` | Get movie by ID |
| POST | `/movies` | Create a new movie |
| PUT | `/movies/:id` | Update a movie |
| DELETE | `/movies/:id` | Delete a movie |

---

## 👩‍💻 Author

**Guada Rojas G**  
[GitHub](https://github.com/GuadaRojasG)
