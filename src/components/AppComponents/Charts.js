import React from "react";
import DoughnutChart from '../ChartsComponents/DoughnutChart';
import BarChart from '../ChartsComponents/BarChart';
import Dropdowns from '../ChartsComponents/Dropdowns';

function Charts({user}) {
    return (
        <div className="Charts">
            <DoughnutChart user={user} />
            <BarChart />
        </div>
    );
}

export default Charts;
