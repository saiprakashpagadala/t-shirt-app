import React from "react";
import './Counter.css'

const Counter = () => {
  const count = 5;
  return (
    <>
      <div className="counter-container">
        <button className="plus">+</button>
        <div className="count">{count}</div>
        <button className="minus">-</button>
      </div>
    </>
  );
};

export default Counter;
