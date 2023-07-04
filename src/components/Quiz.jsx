import { useState } from "react";
import { questions } from "../data/questions";
import { Answers } from "./Answers";


const Quiz = () => {
  return (
    <>
    <div className="quizContainer">
      {questions.map((question, index) => {
        return (
          <>
            <div key={question.id}>
              <h2>{question.question}</h2>
            </div>
            <Answers answers={question.answers} />
          </>
        );
      })}
    </div>
    <button className="bton">ShowResult</button>
    </>
  );
};

export default Quiz;
