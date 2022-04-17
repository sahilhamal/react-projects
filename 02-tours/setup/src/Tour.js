import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [showLess, setShowLess] = useState(true);
  return (
    <div className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
      </footer>
      <p>{showLess ? `${info.substring(0, 200)}...` : info}</p>
      <button onClick={() => setShowLess(!showLess)}>
        {showLess ? "More" : "Less"}
      </button>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
