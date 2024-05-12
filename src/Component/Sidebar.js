'use client';
import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Link } from "react-router-dom";

function Sidebar(){
    const [active, setActive]= useState(1);
    return(
        <div className='sidebar d-flex justify-content-between flex-column bg red text-white py-3 ps-3 pe-5 vh-100'>
            <div>
                <a href="" className='p-3 text-decoration-none text-white'>
                    <i className='bi bi-code-slash fs-4 me-4'></i>
                    <span className='fs-3'>Kostify</span>
                </a>
                <hr className='text-secondary mt-2'/>
                <ul className=' nav nav-pills flex-column mt-3'>
                    <li className={active ===1 ? 'active nav-item p-2': "nav-item p-2"} 
                    onClick={e => setActive(1)}>
                            <Link to="/src/Components/Dashboard.js" className='p-1 text-decoration-none text-white'>
                                <i className='bi bi-speedometer2 me-3 fs-4'></i>
                                <span className='fs-4'>Dashboard</span>
                        </Link>
                    </li>
                    <li className={active ===2 ? 'active nav-item p-2': "nav-item p-2"} 
                    onClick={e => setActive(2)}>
                        <Link to="/src/Pages/Order.js" className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-table me-3 fs-5'></i>
                            <span className='fs-4'>Order</span>
                        </Link>
                    </li>
                    <li className={active ===3 ? 'active nav-item p-2': "nav-item p-2"} 
                    onClick={e => setActive(3)}>
                        <Link to="/src/Pages/Stock.js" className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-grid me-3 fs-5'></i>
                            <span className='fs-4'>Stock</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;