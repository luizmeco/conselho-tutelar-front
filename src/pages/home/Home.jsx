import React from "react"
import { useState } from "react"
import { IoPerson } from "react-icons/io5";



function Home() {
  return (
    <>
      <nav className="navbar fixed-top justify-content-end p-5">
        <button type="button" className="btn btn-primary">
          <IoPerson />
          Perfil
        </button>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <img
            src="./src/assets/logo.png"
            alt="Logo Conselho Tutelar"
            style={{ width: "120px", height: "auto" }}
          />
        </div>
      </div>
    </>
  )
}

export default Home
