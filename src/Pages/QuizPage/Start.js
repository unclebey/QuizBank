import React from "react";
import "../QuizPage/Quiz.css";

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <div className="quiz-Box">
      <div className="quiz-Rules">
        <h3>Quiz Rules</h3>
        <p>There are total 10 questions in this section.</p>
        <p>For Each correct answer there will be 1 point.</p>
        <p>For Each incorrect answer there will be 0 point.</p>
        <p>You may not change the option once opted</p>
      </div>
      <button className="btn-Start" onClick={startQuiz}>
        Start
      </button>
    </div>
  );
};

export default Start;
