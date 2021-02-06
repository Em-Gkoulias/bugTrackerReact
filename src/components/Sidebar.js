import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/projects">PROJECTS</Link>
                </li>
                <li>
                    <Link to="/log">LOG</Link>
                </li>
                <li>
                    <Link to="/team">TEAM MEMBERS</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;