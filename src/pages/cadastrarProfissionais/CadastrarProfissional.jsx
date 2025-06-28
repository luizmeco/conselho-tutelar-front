import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CadastrarProfissional.css'; // Novo arquivo para estilos específicos desta tela

function CadastrarProfissional() {
    const [formData, setFormData] = useState({
        nome: '',
        cargo: '', // 'Secretário/a' ou 'Conselheiro/a'
        cpf: '',
        rg: '',
        dataNascimento: '',
        email: '',
        endereco: '',
        celularDDD: '',
        celularNumero: '',
        fotoPerfil: null, // Para armazenar o arquivo da imagem
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0] // Pega o primeiro arquivo selecionado
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do Novo Profissional:', formData);
        // Aqui você enviaria os dados para uma API
        alert('Profissional cadastrado! Verifique o console para os dados.');
        // Opcional: Redirecionar o usuário após o cadastro
        // navigate('/gerenciar-profissionais');
    };

    const handleCancel = () => {
        console.log('Cadastro cancelado.');
        // Opcional: Redirecionar o usuário para a página anterior ou gerenciar profissionais
        // navigate('/gerenciar-profissionais');
    };

    return (
            <Container className="cadastrar-profissional-container my-5">
                <Card className="cadastrar-profissional-card shadow-lg">
                    <Card.Body className="p-4">
                        <h2 className="text-center mb-5 cadastrar-profissional-title">CADASTRAR NOVO PROFISSIONAL</h2>

                        <Form onSubmit={handleSubmit}>

                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formNome">
                                <Form.Label column sm="3">Nome:</Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        placeholder="Nome completo do profissional"
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCargo">
                                <Form.Label column sm="3">Cargo:</Form.Label>
                                <Col sm="9">
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Secretário/a"
                                        name="cargo"
                                        id="cargoSecretaria"
                                        value="Secretário/a"
                                        checked={formData.cargo === 'Secretário/a'}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Conselheiro/a"
                                        name="cargo"
                                        id="cargoConselheira"
                                        value="Conselheiro/a"
                                        checked={formData.cargo === 'Conselheiro/a'}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCPF">
                                <Form.Label column sm="3">CPF:</Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleChange}
                                        placeholder="Ex: 000.000.000-00"
                                        maxLength="14" // Para formatar com pontos e traço
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formRG">
                                <Form.Label column sm="3">RG:</Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        name="rg"
                                        value={formData.rg}
                                        onChange={handleChange}
                                        placeholder="Ex: 00.000.000-0"
                                        maxLength="12" // Depende do formato do RG
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formDateNascimento">
                                <Form.Label column sm="3">Data de Nascimento:</Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="date"
                                        name="dataNascimento"
                                        value={formData.dataNascimento}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formEmail">
                                <Form.Label column sm="3">E-mail:</Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="nome@exemplo.com"
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formEndereco">
                                <Form.Label column sm="3">Endereço:</Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        name="endereco"
                                        value={formData.endereco}
                                        onChange={handleChange}
                                        placeholder="Rua, Número, Bairro, Cidade, Estado, CEP"
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCelular">
                                <Form.Label column sm="3">Celular:</Form.Label>
                                <Col sm="9">
                                    <InputGroup>
                                        <InputGroup.Text className="celular-prefix">+ 55</InputGroup.Text>
                                        <FormControl
                                            type="text"
                                            name="celularDDD"
                                            value={formData.celularDDD}
                                            onChange={handleChange}
                                            placeholder="(__)"
                                            maxLength="2"
                                            className="ddd-input"
                                            required
                                        />
                                        <FormControl
                                            type="text"
                                            name="celularNumero"
                                            value={formData.celularNumero}
                                            onChange={handleChange}
                                            placeholder="_____-____"
                                            maxLength="10" // Ex: 99999-9999
                                            className="numero-celular-input"
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-4 align-items-center" controlId="formFotoPerfil">
                                <Form.Label column sm="3">Foto de Perfil:</Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="file"
                                        name="fotoPerfil"
                                        onChange={handleChange}
                                        className="d-none" // Esconde o input de arquivo padrão
                                        id="uploadFotoPerfil"
                                    />
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => document.getElementById('uploadFotoPerfil').click()}
                                        className="anexar-imagem-button"
                                    >
                                        Anexar Imagem <i className="bi bi-paperclip ms-2"></i>
                                    </Button>
                                    {formData.fotoPerfil && (
                                        <span className="ms-2 file-name-display">{formData.fotoPerfil.name}</span>
                                    )}
                                </Col>
                            </Form.Group>

                            <div className="d-flex justify-content-center mt-5 button-group">
                                <Button variant="primary" type="submit" className="submit-button me-3">
                                    Cadastrar
                                </Button>
                                <Button variant="secondary" type="button" onClick={handleCancel} className="cancel-button">
                                    Cancelar
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
    );
}

export default CadastrarProfissional;