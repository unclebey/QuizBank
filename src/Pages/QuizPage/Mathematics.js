import React, { useState } from "react";
import Start from "./Start";
import { DataMathematicsQuiz } from "../../API";

const MathematicsQuiz = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      {start ? <DataMathematicsQuiz /> : <Start props={setStart} />}
    </div>
  );
};

export default MathematicsQuiz;
