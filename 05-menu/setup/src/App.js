import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((x) => x.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    setMenuItems(items.filter((x) => x.category === category));
  };

  return (
    <main>
      <section className="menusection">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={allCategories} filterItem={filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
