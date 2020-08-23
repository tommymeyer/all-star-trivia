import React from 'react';


export default function ResultModal({ isCorrect, question, getQuestion }) {
  return (
    <div className={`result-modal ${isCorrect ? "is-correct" : "is-wrong"}`}>
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect && (
          <h3>
            <span role="img" aria-label="Row of star-eyed, smiling emojis.">🤩🤩🤩</span>
            <br />
            YOU WON!
          </h3>
        )}

        {!isCorrect && (
          <>
            <h3>
              <span role="img" aria-label="Row of sad-faced emojis.">😟😢😟</span>
              <br />
              YOU LOST!
            </h3>

            <div className="correct-answer">
              <small>The correct answer was:</small>
              <br />
              <strong dangerouslySetInnerHTML={{ __html: question.correct_answer }}></strong>
            </div>
          </>
        )}

        <button id="next-question" className="next-question-btn" onClick={getQuestion}>Go to next question <span role="img" aria-labelledby="next-question">👉</span></button>
      </div>
    </div>
  );
}
