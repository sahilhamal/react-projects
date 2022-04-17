import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(2);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading... </h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {}
        <div className="btn-container">
          {jobs.map((x, index) => {
            return (
              <button
                key={x.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index == value && "active-btn"}`} // set active css if its the active one. 'job-btn' is set for every button.
              >
                {x.company}
              </button>
            );
          })}
        </div>
        {}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((x) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{x}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );

  return <h2>tabs project setup</h2>;
}

export default App;
