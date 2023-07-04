import Popup from "reactjs-popup";

export function Result() {
  return (
    <div>
      <Popup
        trigger={<button id="resultButton"> show result </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal" id="popupWindow">
            <div className="content" id="resultOverview">
              <h2>Your result!</h2>
              <h3>question</h3>
              <p>Right Answer: Answer</p>
              <p>Your Answer: Answer</p>
            </div>
            <div>
              <button onClick={() => close()}>Restart</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
