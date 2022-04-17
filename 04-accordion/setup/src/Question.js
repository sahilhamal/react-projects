import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => setShowAccordion(!showAccordion)}
        >
          {!showAccordion ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{showAccordion ? info : ""}</p>
    </article>
  );
};

export default Question;
