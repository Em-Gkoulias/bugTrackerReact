import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import Login from "./AuthComponents/Login";
import Register from "./AuthComponents/Register";
import Auth from "./Auth";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Charts from "./AppComponents/Charts";
import Projects from "./AppComponents/Projects";
import Log from "./AppComponents/Log";
import Team from "./AppComponents/Team";

import Project from "./ProjectsComponents/Project";
import CreateProject from "./ProjectsComponents/CreateProject";
import EditProject from "./ProjectsComponents/EditProject";
import CreateBug from "./ProjectsComponents/CreateBug";
import EditBug from "./ProjectsComponents/EditBug";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.scss";

function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    axios
      .get("/api/user")
      .then((response) => {
        // console.log(response.data);
        setUser(response.data);
        setIsLoading(false);
        // window.location.
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      // <Router>
      //   <Route path="/*" exact component={Auth} />
      //   {/* <Route path="/register" exact component={Register} /> */}
      // </Router>
      <Auth />
    );
  } else if (isLoading) {
    return <div className="lds-dual-ring"></div>;
  } else {
    return (
      <Router>
        <div className="App">
          {/* <h1>HELLO {user.name}</h1> */}
          <Sidebar />
          <Navbar user={user} />
          <Switch>
            <Route
              path="/projects"
              exact
              render={(props) => <Projects {...props} user={user} />}
            />
            <Route
              path="/projects/create"
              exact
              render={(props) => <CreateProject {...props} user={user} />}
            />
            <Route
              path="/projects/:id/edit"
              exact
              render={(props) => <EditProject {...props} user={user} />}
            />
            <Route path="/projects/:id/create" exact component={CreateBug} />
            <Route path="/projects/:id/:bugId/edit" exact component={EditBug} />
            <Route path="/projects/:id" component={Project} />
            <Route path="/log" component={Log} />
            <Route path="/team" component={Team} />
            <Route
              path="*"
              exact
              render={(props) => <Charts {...props} user={user} />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
