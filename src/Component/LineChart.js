'use client';
import React from "react";
import {Line} from 'react-chartjs-2';

const labels = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Rata-rata jumlah sewa perbulan",
            backgroundColor: "rgb(255, 99, 132)",
            BorderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 9, 4, 7, 1]
        },
    ],
};

function LineChart(){
    return(
        <div className='bg-white border border-secondary'>
            <Line data={data}></Line>
        </div>
    )
}
 export default LineChart;