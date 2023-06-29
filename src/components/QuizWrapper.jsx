import React from "react";
import { useState } from "react";
import Questions from "./Questions";

const QuizWrapper = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = Questions;
  const { question, answers, correctAnswer } = questions[currentQuestion];

  const onClickNext = () => {
    setCurrentQuestion((prev) => prev + 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev,
          wrongAnswers: prev.wrongAnswers + 1 }
    );
  };

  const onAnswerSelected = (answer) => {
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("right");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };


  return (
    <div className="wrapper">
      <div className="container">
        <h1>Trivia</h1>
        <h2>{question}</h2>
        <ul>
          {answers.map((answer) => (
            <div className="answers"><li onClick={() => onAnswerSelected(answer)} key={answer}>
              {answer}
            </li></div>
          ))}
        </ul>
        <button onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};

export default QuizWrapper;
