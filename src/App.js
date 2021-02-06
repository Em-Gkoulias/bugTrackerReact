import React, { useState } from "react";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Ok from './Ok';

import axios from 'axios';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'http://localhost:8001';
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post('/login', {
        email: email,
        password: password
      }).then(response => console.log(response))
        .catch(error => console.log(error))
    });
  }

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Router>
        <div>
          <NavLink to="/about">About</NavLink>

          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleClick}>
              LOG IN
            </button>
          </form>

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
