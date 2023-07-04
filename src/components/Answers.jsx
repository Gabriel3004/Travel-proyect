import { useState } from "react";

const Answers = ({ 
  answers, 
  correctAnswer,
  showCurrentQuestion,
  setResult,
}) => {

  const onAnswerSelected = (answer) => {
    if (answer === correctAnswer) {
      setResult((prev) => ({
        ...prev,
        correctAnswerResult: prev.correctAnswerResult + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswersResult: prev.wrongAnswersResult + 1,
      }));
    }
    showCurrentQuestion();
  };

  return (
    <div className="answerContainer">
      {answers.map((answer, index) => {
        return ( 
          <div key={answer.id}>
            <button 
            className="answerButton" 
            onClick={() =>onAnswerSelected(answer)}
            value={answer}
            key={index}>
              {answer}
            </button>
          </div>
        );
      })}
    </div>
  );
};


export default Answer;