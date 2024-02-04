import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Schokoladenkuchen</h2>
      <label htmlFor="Schokolade">Dein Schokoladenkuchen</label>
      <input type="text" id="kuchen"></input>
      <a
        className="article__link"
        href="https://www.essen-und-trinken.de/rezepte/59855-rzpt-saftiger-schokoladenkuchen"
      >
        Mehr Schokoladenkuchen
      </a>
    </article>
  );
}
