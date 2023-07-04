import { useState } from "react";

const Answers = ({ answers }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [answerGiven, setAnswerGiven] = useState(false);

  const handleClick = (event) => {
    setUserAnswer(event.target.name);
    setAnswerGiven(true);
  };

  return (
    <>
      <div className="answerContainer">
        {answers.map((answer) => {
          return (
            <button
              onClick={handleClick}
              style={{
                backgroundColor:
                  answerGiven == true && userAnswer === answer
                    ? "rgb(228, 194, 107)"
                    : "",
              }}
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
