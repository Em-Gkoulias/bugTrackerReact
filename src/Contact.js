import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    axios
      .post("/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      })
      .then((response) => console.log(response));
  };

  return (
    <div className="Contact">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm passwordConfirmation"
          id="password_confirmation"
          value={password_confirmation} onChange={(e) => setpassword_confirmation(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Contact;
