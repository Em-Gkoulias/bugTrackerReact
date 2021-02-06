import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Register from './Register';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post("/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response)
          window.location.reload()
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <h1 className="distances loginForm loginHeader">
        Login here to enter the application...
      </h1>
      <form className="distances loginForm" action="">
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
        <button className="distances authButtons" type="submit" onClick={handleClick}>
          LOG IN
        </button>
      </form>
      <h1 className="distances loginForm loginHeader">
        ... or 
        <Link className="registerLink" to="/register">register here</Link>
         if you don't have an account already.
      </h1>
    </div>
  );
};

export default Login;
