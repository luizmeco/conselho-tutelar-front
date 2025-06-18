import React from "react"
import { useState } from "react"

import { Link } from 'react-router-dom';


function Menu() {
    return (
        <>
            <img
                src="./src/assets/logo.png"
                alt="Logo Conselho Tutelar"
                style={{ width: "120px", height: "auto" }}
            />
            <Link to="recebimento-denuncia">
                <button className="btn btn-primary">
                    Recebimento denuncia
                </button>
            </Link>
        </>
    )
}

export default Menu
