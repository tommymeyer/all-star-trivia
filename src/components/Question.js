import React from 'react';
import shuffle from "lodash.shuffle";


export default function Question({ question }) {
  const answers = shuffle([...question.incorrect_answers, question.correct_answer]);


  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers.map((answer, index) => (
        <button className="answer-btn" key={index} dangerouslySetInnerHTML={{ __html: answer }}></button>
      ))}
    </div>
  );
}
