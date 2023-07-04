import Popup from "reactjs-popup";

export function Result({
  questions,
  allAnswers,
  setAllAnswers,
  setAnswerGiven,
}) {
  // console.log(questions);
  // console.log(answerGiven);

  return (
    <div>
      <Popup
        trigger={
          <button
            // disabled={answerGiven !== null ? false : true}
            id="resultButton"
          >
            show result
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal" id="popupWindow">
            <div className="content" id="resultOverview">
              <h2>Your result!</h2>
              {questions.map((question, index) => {
                return (
                  <div key={index} className="resultListing">
                    <h3>{question.question}</h3>
                    <p className="rightAnswer">
                      Right Answer: {question.correctAnswer}
                    </p>
                    {question.correctAnswer == allAnswers[question.id] ? (
                      <p className="rightAnswer">
                        Your Answer: {allAnswers[question.id]}
                      </p>
                    ) : (
                      <p className="wrongAnswer">
                        Your Answer: {allAnswers[question.id]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div id="restartContainer">
              <button
                onClick={() => {
                  setAllAnswers({});
                  setAnswerGiven({});
                  close();
                }}
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
