import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaChevronRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => setIndex(index == 0 ? people.length - 1 : index--)}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => setIndex(index == people.length - 1 ? 0 : index++)}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => setIndex(Math.floor(Math.random() * index))}
      >
        Surprise Me!
      </button>
    </article>
  );
};

export default Review;
