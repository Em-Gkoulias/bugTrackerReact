import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

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
        fetch(`http://127.0.0.1:8001/api/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                history.push('/');
                history.replace('/projects');
            });
    };

    return (
        <div>
            {show ? (
                <button onClick={handleClick}>DELETE</button>
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

export default RemoveProject;
