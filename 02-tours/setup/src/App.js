import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((x) => x.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <>
        <main>
          <Loading></Loading>
        </main>
      </>
    );
  }

  if (tours.length == 0) {
    return (
      <main>
        <h2>No tours left</h2>
        <button onClick={() => fetchTours()} className="btn">
          {" "}
          Refresh
        </button>
      </main>
    );
  }
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </main>
    </>
  );
}

function App2() {
  return <h2>Tours Project Setup</h2>;
}

export default App;
