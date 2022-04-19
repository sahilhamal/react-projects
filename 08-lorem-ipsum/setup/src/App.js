import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    } else if (amount > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Want some lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((eachText, index) => {
          return <p key={index}>{eachText}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
