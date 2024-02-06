import "./Card.css";

export default function Card({ name, color }) {
  return (
    <p className="card">
      {name}
      {color}
    </p>
  );
}
