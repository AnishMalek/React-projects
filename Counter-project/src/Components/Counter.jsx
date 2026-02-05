import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="wrap">
      <div className="counterBox">
        <div className="top">
          <h2 className="heading">Count your steps</h2>
        </div>

        <div className="countArea">
          <h1 className="count">{count}</h1>
          <p className="small">Current Value</p>
        </div>

        <div className="btnRow">
          <button className="btn minus" onClick={decrement}>
            Decrease
          </button>
          <button className="btn plus" onClick={increment}>
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
