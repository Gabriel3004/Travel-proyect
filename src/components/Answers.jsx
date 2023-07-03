export const Answers = ({ answers }) => {
  console.log({ answers })
  return (
    <div className="answerContainer">
      {answers.map((answer) => {
        return ( 
          <div key={answer.id}>
            <button className="answerButton" key={answer.value}>
              {answer}
            </button>
          </div>
        );
      })}
    </div>
  );
};

