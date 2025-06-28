import React from "react"

import logo from "../assets/logo.png"
import { IoPerson } from "react-icons/io5";

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-white fixed-top justify-content-end px-5 py-3 shadow-lg">
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <Link to="/home"><img src={logo} style={{ width: "80px" }} /></Link>
                    </div>
                    <div className="d-flex">
                        <Link to="/"><button type="button" className="btn btn-primary me-3">Login</button></Link>
                        <Link to="perfil-administrador"><button type="button" className="btn btn-primary me-3"><IoPerson />Perfil</button></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar