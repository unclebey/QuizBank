import "./QuizCard.css";
import React from "react";

import Start from "../../Pages/QuizPage/Start";

export const QuizCard = () => {
  return (
    <div className="quiz-Box">
      <button className="btn-Start" onClick={() => Start()}>
        Quiz category A
      </button>
    </div>
  );
};
