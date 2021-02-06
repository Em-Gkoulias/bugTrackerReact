import React, { useEffect, useState } from "react";
import {Doughnut} from "react-chartjs-2";

const DoughnutChart = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const labels = [];
    const data = [];

    useEffect(() => {
        fetch("http://127.0.0.1:8001/api/projects")
            .then((res) => res.json())
            .then((result) => {
                setProjects(result);
                setIsLoading(false);
            })
    }, []);

    if (error) {
        return <div>Error: {error}</div>
    } else if (isLoading) {
        return <div class="lds-dual-ring"></div>;
    } else {
        return (
            <div className="DoughnutChart">

                {projects.map((project) => {
                    labels.push(project["title"]);
                    data.push(project["bugs"].length);
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
