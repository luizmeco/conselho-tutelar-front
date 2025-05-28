import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './index.css'
import Login from './Login.jsx'
import Home from './pages/home/Home.jsx'
import RecebimentoDenuncia from './pages/documentos/recebimento-denuncia/Recebimento-denuncia.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> // Configura a rota / para renderizar o Login
        <Route path="/home" element={<Home />} /> // Configura a rota /home para renderizar o Home
        <Route path="/recebimento-denuncia" element={<RecebimentoDenuncia/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
