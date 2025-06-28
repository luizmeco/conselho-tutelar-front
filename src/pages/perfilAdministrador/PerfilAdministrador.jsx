import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PerfilAdministrador.css'; // Mantenha este CSS por enquanto, mas pode ser renomeado para PerfilAdministrador.css se os estilos forem muito específicos

// Mude o nome da função de ProfissionaisMenu para PerfilAdministrador
function PerfilAdministrador() {
    return (
                    <Card.Body>
                        {/* Logo e Título Centralizados */}
                        <div className="text-center mb-5">
                            <img
                                src="../src/assets/logo.png"
                                alt="Logo Conselho Tutelar"
                                className="dashboard-logo mb-3"
                            />
                        </div>

                        {/* Opções de Cadastro/Gerenciamento */}
                        <Row className="justify-content-center mt-5">
                            <Col xs={12} md={6} lg={5} className="mb-4">
                                <Link to="/home/cadastrar-profissional" className="action-card-link">
                                    <div className="action-card d-flex flex-column align-items-center justify-content-center p-4 shadow-sm">
                                        <i className="bi bi-person-fill fs-1 mb-3 text-muted"></i>
                                        <span className="action-card-title text-center">Cadastrar Profissional</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={12} md={6} lg={5} className="mb-4">
                                <Link to="/home/gerenciar-profissionais" className="action-card-link">
                                    <div className="action-card d-flex flex-column align-items-center justify-content-center p-4 shadow-sm">
                                        <i className="bi bi-person-lines-fill fs-1 mb-3 text-muted"></i>
                                        <span className="action-card-title text-center">Gerenciar Profissionais</span>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
            </Card.Body>
    );
}

// Mude a exportação para PerfilAdministrador
export default PerfilAdministrador;