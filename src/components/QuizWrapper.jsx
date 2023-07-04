import React from "react";
import { useState } from "react";
import Questions from "./Questions";

const QuizWrapper = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = Questions;
  const { question, answers, correctAnswer } = questions[currentQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
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

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="wrapper">
      <div className="container">
        {!showResult ? (
          <div>
            <div></div>
            <h2>{question}</h2>
            <ul>
              {answers.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex">
              <div>
                <span className="active-question-no">
                  {addLeadingZero(currentQuestion + 1)}
                </span>
                <span className="total-question">
                  /{addLeadingZero(questions.length)}
                </span>
              </div>
              <div className="flex-right">
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Your result:</h3>
            <div>
              You answered {result.correctAnswers}/{questions.length} questions
              correctly
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizWrapper;
