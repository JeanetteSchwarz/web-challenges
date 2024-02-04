import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley />
    </div>
  );
}

function Smiley({ isHappy }) {
  return (
    <div>
      <h2 role="img">Feeling {isHappy ? "☺️" : "☹️"}</h2>
    </div>
  );
}
