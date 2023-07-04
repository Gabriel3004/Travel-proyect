import { useState } from "react";

const Answers = ({ answers }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleClick = (event) => {
    setUserAnswer((prev) => ({
      ...prev,
      userAnswer: event.target.value,
    }));
  };

  return (
    <>
      <div className="answerContainer">
        {answers.map((answer) => {
          return (
            <button
              onClick={handleClick}
              className="answerButton"
              name={answer}
              key={answer}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Answers;
