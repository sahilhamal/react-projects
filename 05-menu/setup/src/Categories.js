import React from "react";

const Categories = ({ category, filterItem }) => {
  return (
    <div className="btn-container">
      {category.map((x, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterItem(x)}
          >
            {x}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
