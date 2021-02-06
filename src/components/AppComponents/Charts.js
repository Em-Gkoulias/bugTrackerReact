import React from "react";
import DoughnutChart from '../ChartsComponents/DoughnutChart';
import BarChart from '../ChartsComponents/BarChart';
import Dropdowns from '../ChartsComponents/Dropdowns';

function Charts() {
    return (
        <div className="Charts">
            <DoughnutChart />
            <BarChart />
        </div>
    );
}

export default Charts;
