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
import FichaAtendimento from './pages/documentos/ficha-atendimento/FichaAtendimento.jsx';
import Notificacao from './pages/documentos/notificacao/Notificacao.jsx';
import TermoMedidasResponsaveis from './pages/documentos/termo-medidas-responsaveis/TermoMedidasResponsaveis.jsx';
import TermoMedidasCriancaAdolescente from './pages/documentos/termo-medidas-crianca/TermoMedidasCrianca.jsx';
import PerfilAdministrador from './pages/perfilAdministrador/PerfilAdministrador.jsx';
import GerenciarProfissionais from './pages/gerenciarProfissionais/GerenciarProfissionais.jsx';
import CadastrarProfissional from './pages/cadastrarProfissionais/CadastrarProfissional.jsx';

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
      {
        path: "ficha-atendimento",
        element: <FichaAtendimento />,
      },
      {
        path: "notificacao",
        element: <Notificacao />,
      },
      {
        path: "termo-medidas-responsaveis",
        element: <TermoMedidasResponsaveis />,
      },
      {
        path: "termo-medidas-crianca",
        element: <TermoMedidasCriancaAdolescente />,
      },
      {
        path: "perfil-administrador",
        element: <PerfilAdministrador />,
      },
      {
        path: "gerenciar-profissionais",
        element: <GerenciarProfissionais />,
      },
      {
        path: "cadastrar-profissional",
        element: <CadastrarProfissional />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
