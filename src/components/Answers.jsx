const Answers = ({
  answers,
  setAllAnswers,
  allAnswers,
  setAnswerGiven,
  id,
}) => {
  const handleClick = (event) => {
    setAnswerGiven((prev) => {
      return { ...prev, [id]: true };
    });
    setAllAnswers((prev) => {
      return { ...prev, [id]: event.target.name };
    });
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
                  allAnswers[id] === answer ? "rgb(228, 194, 107)" : "",
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
