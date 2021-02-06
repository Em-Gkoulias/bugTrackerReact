import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function About() {
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    axios.post("/logout").then(response => console.log(response));
  }

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    axios
      .get("/api/user")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/projects")
      .then(res => res.json())
      .then(response => {
        console.log(response)
      })
  }, []);

  return (
    <div className="About">
      <h3>this is the about page</h3>
      <h1>Hello {user.name}</h1>

      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default About;
