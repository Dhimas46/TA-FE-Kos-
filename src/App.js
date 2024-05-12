import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import Order from "../src/Pages/Order";
import Stock from "./Pages/Stock";
import Dashboard from "./Component/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App(){
    return (
        <BrowserRouter>
            <div className='d-flex'>
                <div className='w-auto'>
                    <Sidebar/>
                </div>
                <div className='col overflow-auto'>
                    <Routes>
                        <Route path='/' element={<><Navbar/><Dashboard/></>}></Route>
                        <Route path='/order' element={<Order/>}></Route>
                        <Route path='/stock' element={<Stock/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
