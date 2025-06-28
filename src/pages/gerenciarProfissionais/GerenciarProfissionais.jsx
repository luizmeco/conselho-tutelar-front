import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GerenciarProfissionais.css'; // Novo arquivo para estilos específicos desta tela

function GerenciarProfissionais() {
    // Dados mock para os profissionais. Em um app real, viriam de uma API.
    const profissionais = [
        { id: 1, name: "Roberto dos Santos" },
        { id: 2, name: "João Pereira" },
        { id: 3, name: "Fernanda Almeida" },
        { id: 4, name: "Maria Santos" },
        { id: 5, name: "Augusto Corrêa" },
        { id: 6, name: "Jeniffer da Silva" },
        { id: 7, name: "Paulo Fernandes" },
        { id: 8, name: "Régis Cardoso" },
    ];

    const handleEdit = (id) => {
        console.log(`Editar profissional com ID: ${id}`);
        // Lógica para navegar para a tela de edição do profissional
        alert(`Editar profissional: ${profissionais.find(p => p.id === id).name}`);
    };

    return (
            <Container className="gerenciar-profissionais-container my-5">
                <h2 className="text-center mb-5 gerenciar-profissionais-title">GERENCIAR PROFISSIONAIS</h2>

                <Row xs={1} sm={2} md={3} lg={4} className="g-4"> {/* Layout responsivo de cards */}
                    {profissionais.map(profissional => (
                        <Col key={profissional.id}>
                            <Card className="profissional-card h-100 shadow-sm">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-between p-3">
                                    <div className="profissional-icon-container mb-3">
                                        <i className="bi bi-person-fill gerenciar-icon"></i> {/* Ícone de pessoa */}
                                    </div>
                                    <Card.Title className="text-center mb-3 profissional-name">{profissional.name}</Card.Title>
                                    <div className="d-flex w-100 justify-content-center">
                                        <Button
                                            variant="outline-success"
                                            className="edit-button w-100 me-2"
                                            onClick={() => handleEdit(profissional.id)}
                                        >
                                            EDITAR <i className="bi bi-pencil-square ms-1"></i>
                                        </Button>  
                                        <Button variant="outline-danger">
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
    );
}

export default GerenciarProfissionais;