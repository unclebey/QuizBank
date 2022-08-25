import React from "react";
import Home from "../src/Pages/HomePage/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Component/index";
import {
  ComputerScienceQuiz,
  MathematicsQuiz
} from "./Pages/QuizPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/ComputerScienceQuiz"
            element={<ComputerScienceQuiz />}
          ></Route>
          <Route path="/MathematicsQuiz" element={<MathematicsQuiz />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;