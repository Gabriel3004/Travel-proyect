import questions from "../data/questions";
import Answers from "./Answers";
import { Result } from "./Result";

import { useState } from "react";

const Quiz = () => {
  // const [showResult, setShowResult] = useState();

  // const handleClick = () => {
  //   setShowResult(true);
  //   console.log(showResult);
  // };

  return (
    <>
      <div className="quizContainer">
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <h2>{question.question}</h2>
              <Answers
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                key={question.question}
              />
            </div>
          );
        })}
      </div>
      <Result />
    </>
  );
};

export default Quiz;
