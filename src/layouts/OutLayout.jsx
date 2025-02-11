import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import './layout.css'


function OutLayout() {
    return (
        <div className="conteiner">
            <div className="conteiner_child">
                <Header />
                <NavBar />
                <Outlet />

            </div>


        </div>
    )
}

export default OutLayout