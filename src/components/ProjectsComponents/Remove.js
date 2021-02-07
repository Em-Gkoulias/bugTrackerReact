import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Remove = (props) => {
    const history = useHistory();

    const { id, project_id, title, description, created_at, updated_at } = props["bug"];

    const [showRemove, setShowRemove] = useState(true);

    const handleClick = (e) => {
        e.preventDefault();
        setShowRemove(!showRemove);
    };

    const handleRemove = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8001";

        axios.delete(`/api/bugs/${id}`)
            .then((response) => {
                console.log(response)
                history.push("/");
                history.replace(`/projects/${project_id}`);
            })
            .catch(error => console.log(error))
    };

    return (
        <div>
            {showRemove ? (
                <button className="removeButton" type="button" onClick={handleClick}>
                    delete
                </button>
            ) : (
                <div>
                    <div className="confirmButtonsBg">
                        <p>Are you sure you want to delete this?</p>

                        <button
                            className="confirmButtons yesBtn"
                            onClick={handleRemove}
                        >
                            YES
                        </button>

                        <button
                            className="confirmButtons"
                            onClick={handleClick}
                        >
                            NO
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Remove;
