import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const CreateProject = () => {
    let history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    let id = useParams()["id"];

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:8001/api/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: description,
            }),
        })
            .then((res) => console.log(res))
            .then((result) => {
                console.log(result);
                history.push(`/projects`);
            });
    };

    return (
        <div className="CreateBug">
            <h1 className="createBugHeader">Add new project: </h1>
            <form className="addBugForm">
                <label>
                    Title:
                    <input
                        className="addInputs"
                        type="text"
                        name="title"
                        id="addProjectTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Description:
                    <textarea
                        className="addInputs"
                        name="description"
                        id="addProjectDescription"
                        cols="30"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </label>

                <button type="button" onClick={handleSubmit}>
                    Add
                </button>
            </form>
        </div>
    );
};

export default CreateProject;
