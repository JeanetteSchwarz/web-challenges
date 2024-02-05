import React from "react";
import "./styles.css";
import { useState } from "react";

export default function Counter() {
  //function Counter() {
  const [count, setCount] = useState(0);

  // let count = 0;

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
