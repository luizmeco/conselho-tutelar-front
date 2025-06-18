import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './index.css'
import ErrorPage from './pages/error/ErrorPage.jsx'
import Login from './Login.jsx'
import Home from './pages/home/Home.jsx'
import Menu from './pages/menu/Menu.jsx'
import RecebimentoDenuncia from './pages/documentos/recebimento-denuncia/Recebimento-denuncia.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Menu />, // Conteúdo inicial da página home
      },
      {
        path: "recebimento-denuncia",
        element: <RecebimentoDenuncia />,
      },
      // Outras rotas filhas da página home
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
