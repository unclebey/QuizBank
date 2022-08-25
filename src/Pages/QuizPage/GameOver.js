import React from "react";

import "../QuizPage/Quiz.css";

const GameOver = ({ pts }) => {
  const refreshPage = () => window.location.reload();

  return (
    <>
      <hr />
      <h2>Result</h2>
      <hr />
      <h3>Your score is {pts} /10 points</h3>
      <hr />

      <button className="game-Over-btn" onClick={refreshPage}>
        Retry
      </button>
    </>
  );
};

export default GameOver;
