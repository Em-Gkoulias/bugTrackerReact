import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
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
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="distances loginForm loginHeader">
        Complete the form to create an account
      </h2>
      <form className="loginForm distances loginHeader">
        <input
          className="distances"
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="distances"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="distances"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="distances"
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
          id="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setpassword_confirmation(e.target.value)}
        />
        <button
          className="distances authButtons"
          type="submit"
          onClick={handleClick}
        >
          REGISTER
        </button>
      </form>
      <h2 className="distances loginForm loginHeader">
        If you already have an account
        <Link className="registerLink" to="/login">
          login here
        </Link>
      </h2>
    </div>
  );
};

export default Register;
