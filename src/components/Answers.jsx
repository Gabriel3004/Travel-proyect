export const Answers = ({ answers }) => {
  return (
    <div className="answerContainer">
      {answers.map((answer) => {
        return (
          <div key={answer.id}>
            <button>{answer}</button>
          </div>
        );
      })}
    </div>
  );
};
