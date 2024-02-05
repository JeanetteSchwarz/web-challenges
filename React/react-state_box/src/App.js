import "./styles.css";
import { useState } from "react";

export default function App() {
  //let isActive = false;
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState(false);

  function handleClick() {
    //isActive = !isActive;
    // Check that the value changes correctly.
    setIsActive(!isActive);
    setText(!text);

    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{text ? "Activate" : "Deactivate"}</button>
    </main>
  );
}
