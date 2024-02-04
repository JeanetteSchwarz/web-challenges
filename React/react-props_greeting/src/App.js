import "./styles.css";

export default function App() {
  return <Greeting name="Linus" />;
}

function Greeting({ name }) {
  return (
    <div>
      <h2>
        {name === "Roland"} ? "hello Coach" : Hello, {name}!
      </h2>
    </div>
  );
}
