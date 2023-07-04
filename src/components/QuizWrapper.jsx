import React from "react";
import { useState } from "react";
import Questions from "./Questions";

const QuizWrapper = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [idx, setIdx] = useState(null);
  const [result, setResult] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = Questions;
  const { question, answers, correctAnswer } = questions[currentQuestion];
  const addZero = (number) => (number > 9 ? number : `0${number}`);

  const onClickNext = () => {
    setIdx(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const answerSelected = (answer, index) => {
    setIdx(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  return (
    <div className="wrapper">
      {!showResult ? (
        <div className="container">
          <div className="ques">
            <h2>{question}</h2>
          </div>
          <div className="answ">
            <ul>
              {answers.map((answer, index) => (
                <li
                  onClick={() => answerSelected(answer, index)}
                  key={answer}
                  className={idx === index ? "selected" : null}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
          <div className="nbutt">
            <div className="flex">
              <div className="flex-right">
                <button onClick={onClickNext} disabled={idx === null}>
                  {currentQuestion === questions.length - 1 ? "Send" : "Next"}
                </button>
              </div>
              <div>
                <span className="notactive">
                  {addZero(currentQuestion + 1)}
                </span>
                <span className="total">
                  /{addZero(questions.length)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Your result:</h3>
          <div>
            <p>
              You answered {result.correctAnswers}/{questions.length} questions
              correctly!!! 🎉
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizWrapper;
