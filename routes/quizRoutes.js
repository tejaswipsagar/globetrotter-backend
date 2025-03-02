const express = require("express");
const router = express.Router();
const questions = require("../data/questions.json");
const answers = require("../data/answers.json");

router.get("/questions", (req, res) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random()); // Shuffle questions
  const selectedQuestions = shuffled.slice(0, 10); // Pick first 10
  res.json(selectedQuestions);
});

router.post("/check-answer", (req, res) => {
  const { key, selectedAnswer } = req.body;
  const answerData = answers.find((item) => item.key === key);

  if (!answerData) {
    return res.status(404).json({ error: "Question not found" });
  }

  const isCorrect = selectedAnswer === answerData.answer;
  res.json({
    correct: isCorrect,
    answer: answerData.answer,
    trivia: answerData.trivia,
    fun_fact: answerData.fun_fact,
  });
});

module.exports = router;
