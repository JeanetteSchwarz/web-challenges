import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Thanks for clicking!");
  }
  return (
    <Button
      color="#008000"
      disabled=""
      text="Klick mich!"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button color={{ color: color }} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
