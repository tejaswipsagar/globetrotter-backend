# Quiz API Backend

This is a simple backend API for a quiz application built using **Node.js** and **Express.js**. It provides endpoints to fetch random quiz questions and verify answers, returning trivia and fun facts.

---

## 📌 Features

- Get 10 random quiz questions
- Check answers and receive trivia and fun facts
- CORS enabled for frontend integration

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-repo-url.git
cd your-repo-folder
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Server

```sh
npm start
```

The server will start on `http://localhost:5000`

---

## 📁 Project Structure

```
backend/
│── data/
│   ├── questions.json      # Stores quiz questions
│   ├── answers.json        # Stores correct answers with trivia
│
│── routes/
│   ├── quizRoutes.js       # API routes for quiz functionality
│
│── server.js               # Main server file
│── package.json            # Dependencies & scripts
│── README.md               # Documentation
```

---

## 🚀 API Endpoints

### 1️⃣ Get 10 Random Questions

**Endpoint:** `GET /api/questions`

**Response:**

```json
[
  {
    "key": "paris_123",
    "city": "Paris",
    "country": "France",
    "clues": [
      "This city is home to a famous tower that sparkles every night.",
      "Known as the 'City of Love' and a hub for fashion and art."
    ],
    "options": ["Paris", "London", "Rome", "Berlin"]
  }
]
```

### 2️⃣ Check Answer & Get Trivia

**Endpoint:** `POST /api/check-answer`

**Request Body:**

```json
{
  "key": "paris_123",
  "selectedAnswer": "Paris"
}
```

**Response:**

```json
{
  "correct": true,
  "answer": "Paris",
  "trivia": ["Paris was originally a Roman city called Lutetia."],
  "fun_fact": [
    "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!"
  ]
}
```

---

## 🌎 Deployment

You can deploy this backend on **Railway** (free tier available). Follow these steps:

1. Push your code to GitHub
2. Sign in to [Railway](https://railway.app/)
3. Create a new project and link your repository
4. Deploy 🚀

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. Suggestions are always welcome!

---

## 📜 License

This project is **MIT Licensed**. Use it freely! 🎉
