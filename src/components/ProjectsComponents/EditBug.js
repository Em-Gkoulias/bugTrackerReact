import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

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
        fetch(`http://127.0.0.1:8001/api/bugs/${bugId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: bug.id,
                project_id: bug.project_id,
                title: title,
                description: description,
                created_at: bug.created_at,
                updated_at: bug.updated_at
            })
        })
            .then(res => res.json())
            .then((result) => {
                setBug(result);
                setIsLoading(false);
                history.push(`/projects/${id}`);
            })
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:8001/api/bugs/${bugId}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                // console.log(result);
                setBug(result);
                setTitle(result.title);
                setDescription(result.description);
                setIsLoading(false);
            })
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    } else if (isLoading) {
        return <div>Loading...</div>
    } else {
        // console.log(bug);
        return (
            <div className="CreateBug">
                <h1 className="createBugHeader">Edit bug</h1>
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

                    <button type="button" onClick={handleSubmit}>Edit</button>
                </form>
            </div>
        );
    }

    
};

export default EditBug;
