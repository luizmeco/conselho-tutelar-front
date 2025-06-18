import React from "react"
import { useState } from "react"

import NavBar from "../../components/NavBar"

import { Outlet } from "react-router-dom"


function Home() {
  return (
    <>
    <div className="container">
    <NavBar />
        <div className="card py-3 mb-3" style={{marginTop: "150px"}}>
          <Outlet />
        </div>
    </div>
    </>
  )
}

export default Home
