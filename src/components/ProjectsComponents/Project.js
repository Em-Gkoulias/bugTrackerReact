import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Remove from './Remove';

const Project = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState({});
    const [bugs, setBugs] = useState([]);

    const params = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8001/api/projects/${params.id}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setBugs(result.bugs);
                    setIsLoading(false);
                    setProject(result);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="projectShow">
                <div className="projectHeader">
                    <div className="headers">
                        <h1>{project.title}</h1>
                        <h3>Bugs to be fixed: {bugs.length}</h3>
                    </div>
                    <div className="addBug">
                        <Link to={`/projects/${project.id}/create`}>
                            Add Bug
                        </Link>
                    </div>
                </div>

                <ul className="projectsBugs">
                    {bugs.map((bug) => {
                        return (
                            <li className="bug">
                                <div className="bugsProperties">
                                    <h4>{bug.title}</h4>
                                    <div>{bug.description}</div>
                                </div>
                                <div className="bugsCrud">
                                    <Remove bug={bug} />
                                    <div>
                                        <Link
                                            to={`/projects/${project.id}/${bug.id}/edit`}
                                        >
                                            edit
                                        </Link>
                                    </div>
                                    <button>status</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default Project;
