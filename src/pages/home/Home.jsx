import React from "react"
import { useState } from "react"

import NavBar from "../../components/NavBar"

import { Outlet } from "react-router-dom"


function Home() {
  return (
    <>
    <div className="container" style={{minWidth: "75vw"}}>
    <NavBar />
        <div className="card py-3 mb-3 shadow-lg" style={{marginTop: "150px", minWidth: "100%"}}>
          <Outlet />
        </div>
    </div>
    </>
  )
}

export default Home
