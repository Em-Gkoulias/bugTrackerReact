import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RemoveProject = ({ project }) => {
  const history = useHistory();

  const { id } = project;
  const [show, setShow] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(id);
    setShow(!show);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    axios
      .delete(`/api/projects/${id}`)
      .then((response) => {
        console.log(response);
        history.push("/");
        history.replace("/projects");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {show ? (
        <button onClick={handleClick}>DELETE</button>
      ) : (
        <div>
          <div className="confirmButtonsBg">
            <p>Are you sure you want to delete this?</p>

            <button className="confirmButtons yesBtn" onClick={handleRemove}>
              YES
            </button>

            <button className="confirmButtons" onClick={handleClick}>
              NO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveProject;
