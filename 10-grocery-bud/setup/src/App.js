import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  }
  return [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState("");
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "Hello babe",
    type: "success",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter value");
    } else if (name && isEditing) {
      setIsEditing(false);
      // const newList = list.map((x) => {
      //   if (x.id === editID) {
      //     x.title = name;
      //   }
      //   return x;
      // });
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      showAlert(true, "success", "Value changed");
    } else {
      showAlert(true, "success", name.toUpperCase() + " added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList(() => {
        return [...list, newItem];
      });
      setName("");
    }
  };

  const showAlert = (show = false, type, msg) => {
    setAlert({ show, type, msg });
  };

  const clearItems = () => {
    showAlert(true, "success", "Items cleared");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item deleted");
    const newList = list.filter((x) => x.id !== id);
    setList(newList);
  };

  const editItem = (id) => {
    setIsEditing(true);
    const specificItem = list.find((x) => x.id === id);
    setEditID(id);
    setName(specificItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="Eggs.."
            value={name}
            className="grocery"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearItems}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
