'use client';
import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-red bg-red">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul clas="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item border rounded">
                            <a className="nav-link text-white" aria-current="page" href="#">
                                <i className="bi bi-search"></i> Search
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
