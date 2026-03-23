import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("crudData")) || [];
    setItems(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("crudData", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (index) => {
    const filtered = items.filter((_, i) => i !== index);
    setItems(filtered);
  };

  return (
    <div className="app">
      <div className="glass-card">
        <h2>Enter Task Here</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
        </div>

        <div className="list">
          {items.length === 0 ? (
            <p className="empty">No items yet </p>
          ) : (
            items.map((item, index) => (
              <div className="card" key={index}>
                <span>{item}</span>
                <button onClick={() => deleteItem(index)}>✖</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;