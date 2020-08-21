import React from 'react';

export default function ResultModal() {
  return (
    <div className="result-modal">
      <div className="overlay" />
      <div className="result-modal-content">
        <h3>
          <span role="img" aria-label="Row of star-eyed, smiling emojis.">🤩🤩🤩</span>
          <br />
          YOU WON!
        </h3>

        <h3>
          <span role="img" aria-label="Row of sad-faced emojis.">😟😢😟</span>
          <br />
          YOU LOST!
        </h3>

        <div className="correct-answer">
          <small>The correct answer was:</small>
          <br />
          <strong>Answer here</strong>
        </div>

        <button id="next-question" className="next-question-btn">Go to next question <span role="img" aria-labelledby="next-question">👉</span></button>
      </div>
    </div>
  );
}
