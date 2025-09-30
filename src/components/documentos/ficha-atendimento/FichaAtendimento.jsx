import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; // Reutiliza o mesmo arquivo CSS para a estilização

function FichaAtendimento() {
  const [formData, setFormData] = useState({
    dataAtendimento: '',
    horaAtendimento: '',
    direitoViolado: '',
    relatos: '',
    quemEhOViolador: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da Ficha de Atendimento:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados, por exemplo, para uma API
    alert('Ficha de Atendimento enviada! Verifique o console para os dados.');
  };

  return (
    <Container className="my-5 form-container">
      <Card className="shadow-lg p-4 form-card">
        <Card.Body>
          <h2 className="text-center mb-4 text-primary">
            <i className="bi bi-person-lines-fill me-2"></i>FICHA DE ATENDIMENTO
          </h2>
          <p className="text-center text-muted mb-4">
            Conselho Tutelar - Panambi | Rua: Hermann Mayer, 43, Térreo, Centro, Panambi/RS.
            <br />
            Fone (55) 3375 6592/84195737 Email: conselhotutelar@panambi.rs.gov.br
          </p>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formGridDataAtendimento">
                <Form.Label>Data do Atendimento</Form.Label>
                <Form.Control
                  type="date"
                  name="dataAtendimento"
                  value={formData.dataAtendimento}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formGridHoraAtendimento">
                <Form.Label>Hora do Atendimento</Form.Label>
                <Form.Control
                  type="time"
                  name="horaAtendimento"
                  value={formData.horaAtendimento}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formDireitoViolado">
              <Form.Label>Direito violado</Form.Label>
              <Form.Control
                type="text"
                name="direitoViolado"
                value={formData.direitoViolado}
                onChange={handleChange}
                placeholder="Descreva o direito violado (ex: direito à educação, direito à saúde)"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRelatos">
              <Form.Label>Relatos</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="relatos"
                value={formData.relatos}
                onChange={handleChange}
                placeholder="Detalhe os relatos do atendimento..."
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formQuemEhOViolador">
              <Form.Label>Quem é o violador?</Form.Label>
              <Form.Control
                type="text"
                name="quemEhOViolador"
                value={formData.quemEhOViolador}
                onChange={handleChange}
                placeholder="Nome ou descrição do violador"
                required
              />
            </Form.Group>

            <div className="text-center mb-4">
              <p className="text-muted">Ass. Digital Conselheiro (a) Tutelar</p>
            </div>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg" className="generate-document-button">
                <i className="bi bi-download me-2"></i>GERAR DOCUMENTO
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FichaAtendimento;