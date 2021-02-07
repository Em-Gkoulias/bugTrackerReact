import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import axios from "axios";

import RemoveProject from "../ProjectsComponents/RemoveProject";

const Projects = ({user}) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    axios
      .get("/api/projects")
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setProjects(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
    return <div className="spinner"></div>;
  } else {
    return (
      <div className="Projects">
        <div className="projectsHeader">
          <h1 className="header">
            Click on a projects title to enter the project
          </h1>
          <div className="addProject">
            <Link to="/projects/create">ADD PROJECT</Link>
          </div>
        </div>
        <ul>
          {projects.map((project) => {
            if (project.profile_id == user.id) {
                return (
                  <div className="project">
                    <li className="projectProperties">
                      <ul>
                        <li>
                          <div className="projectTitle">
                            <Link to={`projects/${project.id}`}>
                              Title: {project.title}
                            </Link>
                          </div>
                        </li>
                        <li>
                          <p>Description: {project.description}</p>
                        </li>
                        <li>
                          <p className="bugs">Bugs: {project.bugs.length}</p>
                        </li>
                      </ul>
                    </li>
                    <div className="projectCRUD">
                      <RemoveProject project={project} />
                      <Link to={`projects/${project.id}/edit`}>Edit</Link>
                    </div>
                  </div>
                );
            }
          })}
        </ul>
      </div>
    );
  }
};

export default Projects;
