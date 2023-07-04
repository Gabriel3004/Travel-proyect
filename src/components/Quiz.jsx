import questions from "../data/questions";
import Answers from "./Answers";
import Result from "./Result";

import { useState } from "react";

const Quiz = () => {
  const [showResult, setShowResult] = useState(false);
  return (
    <>
      <div className="quizContainer">
        {questions.map((question) => {
          return (
            <>
              <div key={question.id}>
                <h2>{question.question}</h2>
              </div>
              <Answers
                answers={question.answers}
                correctAnswer={question.correctAnswer}
              />
            </>
          );
        })}
      </div>
      <button id="resultButton">show result</button>
    </>
  );
};

export default Quiz;
