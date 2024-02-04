import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>
        Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer
        würde ihm schon folgen, spät in der Nacht und dazu noch in dieser engen
        Gasse mitten im übel beleumundeten Hafenviertel?
      </p>
    </article>
  );
}
