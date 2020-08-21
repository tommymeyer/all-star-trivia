import React, { useState, useEffect, useCallback } from 'react';
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';
import './App.sass';

export default function App() {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("any");


  const getQuestion = useCallback(() => {
    let url = "https://opentdb.com/api.php?amount=1";

    if (selectedCategory !== "any") url += `&category=${selectedCategory}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setQuestion(data.results[0]));
  }, [selectedCategory]);


  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory]);


  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector category={selectedCategory} chooseCategory={setSelectedCategory} />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && <Question question={question} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button className="next-question-btn">Go to next question <span role="img" aria-label="Pointing right emoji.">👉</span></button>
      </div>
    </div>
  );
}
