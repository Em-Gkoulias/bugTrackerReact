import React, { useEffect, useState } from "react";
import {Doughnut} from "react-chartjs-2";
import axios from 'axios';

const DoughnutChart = ({user}) => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const labels = [];
    const data = [];

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://127.0.0.1:8001";
        axios.get("/api/projects")
            .then(response => {
                setProjects(response.data)
                console.log(response.data);
                setIsLoading(false)
            }).catch(error => console.log(error))
    }, []);

    if (error) {
        return <div>Error: {error}</div>
    } else if (isLoading) {
        console.log(projects);
        return <div class="lds-dual-ring"></div>;
    } else {
        return (
            <div className="DoughnutChart">

                {projects.map((project) => {
                    if (project.profile_id == user.id) {
                        labels.push(project["title"]);
                        data.push(project["bugs"].length);
                    }
                })}

                <Doughnut
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                label: "# of votes",
                                data: data,
                                backgroundColor: [
                                    "#ff652f",
                                    "#ffe400",
                                    "#4ec54a",
                                    "#4ec54a",
                                    "#4ec54a",
                                    "#4ec54a",
                                ],
                            },
                        ],
                    }}
                    height={200}
                    width={300}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                    }}
                />
            </div>
        );
    }
};

export default DoughnutChart;
