import questions from "../data/questions";
import Answers from "./Answers";
import { Result } from "./Result";

import { useState } from "react";

const Quiz = () => {
  const [allAnswers, setAllAnswers] = useState({});
  const [answerGiven, setAnswerGiven] = useState({});

  return (
    <>
      <div className="quizContainer">
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <h2>{question.question}</h2>
              <Answers
                setAllAnswers={setAllAnswers}
                allAnswers={allAnswers}
                setAnswerGiven={setAnswerGiven}
                answerGiven={answerGiven}
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                key={question.question}
                id={question.id}
              />
            </div>
          );
        })}
      </div>
      <Result
        questions={questions}
        allAnswers={allAnswers}
        setAllAnswers={setAllAnswers}
        setAnswerGiven={setAnswerGiven}
      />
    </>
  );
};

export default Quiz;
