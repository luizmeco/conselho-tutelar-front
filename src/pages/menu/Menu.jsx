import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'; // Novo arquivo para estilos específicos do dashboard/menu

function Menu() {
    const [searchTerm, setSearchTerm] = useState('');

    // Lista dos formulários com seus nomes e caminhos de rota
    const formLinks = [
        { name: "Ficha Recebimento de Denúncia", path: "recebimento-denuncia" },
        { name: "Ficha de Atendimento", path: "ficha-atendimento" },
        { name: "Notificação", path: "notificacao" },
        { name: "Termo Aplicação Medidas Pais e Responsáveis", path: "termo-medidas-responsaveis" },
        { name: "Termo Aplicação Medidas Para a Criança ou Adolescente", path: "termo-medidas-crianca" },
    ];

    const filteredForms = formLinks.filter(form =>
        form.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
                    <Card.Body>
                        {/* Logo e Título Centralizados */}
                        <div className="text-center mb-5">
                            <img
                                src="./src/assets/logo.png" // Verifique o caminho correto da sua imagem
                                alt="Logo Conselho Tutelar"
                                className="dashboard-logo mb-3"
                            />
                            <h1 className="dashboard-title text-primary">CONSELHO TUTELAR</h1>
                        </div>

                        {/* Barra de Pesquisa Centralizada */}
                        <Row className="justify-content-center mb-5">
                            <Col md={8} lg={6}>
                                <InputGroup className="dashboard-search-bar shadow-sm">
                                    <FormControl
                                        placeholder="O que você procura?"
                                        aria-label="O que você procura?"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="search-input-dashboard"
                                    />
                                    <Button variant="outline-secondary" className="search-icon-button">
                                        <i className="bi bi-search"></i>
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>

                        {/* Lista de Links para Formulários */}
                        <Row className="justify-content-center">
                            <Col md={10} lg={8}>
                                <div className="form-list-container">
                                    {filteredForms.map((form, index) => (
                                        <Link to={form.path} key={index} className="form-list-item-link">
                                            <div className="form-list-item d-flex justify-content-between align-items-center">
                                                <span>{form.name}</span>
                                                <i className="bi bi-plus"></i> {/* Ícone de + */}
                                            </div>
                                        </Link>
                                    ))}
                                    {filteredForms.length === 0 && (
                                        <p className="text-center text-muted mt-3">Nenhum formulário encontrado.</p>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
    );
}

export default Menu;