import React from "react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import './Login.css'


function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("admin")
  const [senha, setSenha] = useState("admin")

  const handleLogin = (e) => {
    e.preventDefault()

    if (usuario == "admin" && senha == "admin") {
      navigate('/home');
    }

    // Handle login logic here
    console.log("Login attempt:", { usuario, senha })
  }

  return (
    <>
      <div className="container">
      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-header text-center bg-white border-0 pb-2">
          <div className="d-flex justify-content-center mb-3">
            <img
              src="./src/assets/logo.png"
              alt="Logo Conselho Tutelar"
              style={{ width: "120px", height: "auto" }}
            />
          </div>
        </div>

        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label text-muted small">
                Usuário
              </label>
              <input
                type="text"
                className="form-control"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                style={{
                  borderColor: "#dee2e6",
                  fontSize: "14px",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#4A90E2"
                  e.target.style.boxShadow = "0 0 0 0.2rem rgba(74, 144, 226, 0.25)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#dee2e6"
                  e.target.style.boxShadow = "none"
                }}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="senha" className="form-label text-muted small">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={{
                  borderColor: "#dee2e6",
                  fontSize: "14px",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#4A90E2"
                  e.target.style.boxShadow = "0 0 0 0.2rem rgba(74, 144, 226, 0.25)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#dee2e6"
                  e.target.style.boxShadow = "none"
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 text-white fw-medium"
              style={{
                backgroundColor: "#4A90E2",
                borderColor: "#4A90E2",
                padding: "10px 16px",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#357ABD"
                e.currentTarget.style.borderColor = "#357ABD"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4A90E2"
                e.currentTarget.style.borderColor = "#4A90E2"
              }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
