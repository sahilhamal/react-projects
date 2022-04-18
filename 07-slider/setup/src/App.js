import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // One way to check the index value
  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }
    if (index === people.length) {
      setIndex(0);
    }
  }, [index, people]);

  // Add interval effect. Since the update happens everytime the index changes, we need to have a
  // return function so that it may not get stuck in a loop. In that return function, we remove the previous
  // interval condtion that we had set initially
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <div className="span"></div>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((x, currIndex) => {
          const { id, image, name, title, quote } = x;
          let position = "nextSlide";
          if (index === currIndex) {
            position = "activeSlide";
          }
          if (
            currIndex == index - 1 ||
            (index === 0 && currIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev">
          {/* <FiChevronLeft
            onClick={() => setIndex(index == 0 ? people.length - 1 : index - 1)}
          /> */}
          <FiChevronLeft onClick={() => setIndex(index - 1)} />
        </button>
        <button className="next">
          {/* <FiChevronRight
            onClick={() => setIndex(index == people.length - 1 ? 0 : index + 1)}
          /> */}
          <FiChevronRight onClick={() => setIndex(index + 1)} />
        </button>
      </div>
    </section>
  );
}

export default App;
