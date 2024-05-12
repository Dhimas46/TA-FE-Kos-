'use client';
import React from "react";
import "../App.css";
import LineChart from "./LineChart";
import { PieChart } from "@mui/icons-material";

const Dashboard = () => {
    return (
        <div className='p-5 bg-light'>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col 12 bg light'>
                    <div className='d-flex justify-content align-items-center bg-white border border-secondary shadow-sm'>
                        <i className='bi bi-currency-dollar'></i>
                    </div>
                        <span>Hi, Jammy</span>
                        <h2>qwdfhipojas /</h2>
                    </div>
                </div>
                <div className="row">
                    <div className='col 12'>
                        <LineChart/>
                    </div>
                    <div className='col 12'>
                        <PieChart/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;