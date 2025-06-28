import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; // Reutiliza o mesmo arquivo CSS para a estilização

function Notificacao() {
  const [formData, setFormData] = useState({
    dataNotificacao: '',
    horaNotificacao: '',
    nomeQuemRecebeu: '',
    segundaViaConvocacao: '' // Este campo é para o texto da segunda via da convocação
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
    console.log('Dados da Notificação:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados, por exemplo, para uma API
    alert('Notificação enviada! Verifique o console para os dados.');
  };

  return (
    <Container className="my-5 form-container">
      <Card className="shadow-lg p-4 form-card">
        <Card.Body>
          <h2 className="text-center mb-4 text-primary">
            <i className="bi bi-bell-fill me-2"></i>NOTIFICAÇÃO
          </h2>
          <p className="text-center text-muted mb-4">
            Conselho Tutelar - Panambi | Rua: Hermann Mayer, 43, Térreo, Centro, Panambi/RS.
            <br />
            Fone (55) 3375 6592/84195737 Email: conselhotutelar@panambi.rs.gov.br
          </p>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formGridDataNotificacao">
                <Form.Label>Data da Notificação</Form.Label>
                <Form.Control
                  type="date"
                  name="dataNotificacao"
                  value={formData.dataNotificacao}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formGridHoraNotificacao">
                <Form.Label>Hora da Notificação</Form.Label>
                <Form.Control
                  type="time"
                  name="horaNotificacao"
                  value={formData.horaNotificacao}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formNomeQuemRecebeu">
              <Form.Label>Nome de quem recebeu:</Form.Label>
              <Form.Control
                type="text"
                name="nomeQuemRecebeu"
                value={formData.nomeQuemRecebeu}
                onChange={handleChange}
                placeholder="Digite o nome completo de quem recebeu a notificação"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formSegundaViaConvocacao">
              <Form.Label className="mt-3">Segue abaixo a segunda via da Convocação:</Form.Label>
              <Form.Control
                as="textarea"
                rows={10} // Aumentei o número de linhas para comportar um texto maior
                name="segundaViaConvocacao"
                value={formData.segundaViaConvocacao}
                onChange={handleChange}
                placeholder="Insira o texto completo da segunda via da convocação aqui..."
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

export default Notificacao;