import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const EditBug = () => {
  const history = useHistory();

  const bugId = useParams()["bugId"];
  const id = useParams()["id"];

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bug, setBug] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    console.log('ok');
    axios
      .put(`/api/bugs/${bugId}`, {
        id: bug.id,
        project_id: bug.project_id,
        title: title,
        description: description
      })
      .then((response) => {
        console.log(response);
        setBug(response.data);
        setIsLoading(false);
        history.push(`/projects/${id}`);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8001";
    axios.get(`/api/bugs/${bugId}`)
      .then((response) => {
        setBug(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    // console.log(bug);
    return (
      <div className="CreateBug">
        <h1 className="createBugHeader">Edit bug</h1>
        <form className="addBugForm">
          <label>
            Title:
            <input
              className="addInputs"
              type="text"
              name="title"
              id="addBugTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Description:
            <textarea
              className="addInputs"
              name="description"
              id="addBugDescription"
              cols="30"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>

          <button type="button" onClick={handleSubmit}>
            Edit
          </button>
        </form>
      </div>
    );
  }
};

export default EditBug;
