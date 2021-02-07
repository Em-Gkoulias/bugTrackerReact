import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const CreateBug = () => {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    let id = useParams()["id"];

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = 'http://localhost:8001';

        axios.post(`/api/bugs`, {
            project_id: id,
            title: title,
            description: description
        }).then((response) => {
            console.log(response)
            history.push(`/projects/${id}`); 
        })
    }

    return (
        <div className="CreateBug">
            <h1 className="createBugHeader">Add new bug at project: {}</h1>
            <form
                className="addBugForm"
            >
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

                <button type="button" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
};

export default CreateBug;
