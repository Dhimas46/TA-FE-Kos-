'use client';
import React from "react";
import Navbar from "../Component/Navbar";

function Order(){
    return(
        <>
        <Navbar/>
        <div className='p-5 bg-light'>
            <div className='bg-white rounded p-4'>
                <table class="table caption-top bg-white rounded mt-2">
                    <caption className='text-white fs-4'>Recent Orders</caption>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                        <tr>
                            <th scope="row">2434</th>
                            <td>Anggi Bethand</td>
                            <td>Jl. Ahmad Yani  no.8 G7G10</td>
                            <td>10 July 2024</td>
                            <td>950.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default Order;