import React from "react"

import logo from "../assets/logo.png"
import { IoPerson } from "react-icons/io5";

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-white fixed-top justify-content-end px-5 py-3">
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <Link to="/home"><img src={logo} style={{ width: "80px" }} /></Link>
                    </div>
                    <div>
                        <Link to="/"><button type="button" className="btn btn-primary me-3">Login</button></Link>
                        <button type="button" className="btn btn-primary">
                            <IoPerson />
                            Perfil
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar