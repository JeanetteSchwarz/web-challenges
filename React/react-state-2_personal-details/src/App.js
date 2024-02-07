import React from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App(name, email) {

  handleCreateUser(name, email) {
    setName(formElements.name.value);
    setEmail(formElements.email.value);
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
