import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; // Reutiliza o mesmo arquivo CSS para a estilização

function TermoMedidasResponsaveis() {
  const [formData, setFormData] = useState({
    dataTermo: '',
    horaTermo: '',
    aplicacaoMedidasTexto: '',
    // Checkboxes para as medidas
    medidaI: false,
    medidaII: false,
    medidaIII: false,
    medidaIV: false,
    medidaV: false,
    medidaVI: false,
    medidaVII: false,
    medidaVIII: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Termo de Medidas:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados, por exemplo, para uma API
    alert('Termo de Medidas enviado! Verifique o console para os dados.');
  };

  return (
    <Container className="my-5 form-container">
      <Card className="shadow-lg p-4 form-card">
        <Card.Body>
          <h2 className="text-center mb-4 text-primary">
            <i className="bi bi-file-earmark-ruled-fill me-2"></i>TERMO APLICAÇÃO MEDIDAS AOS PAIS OU RESPONSÁVEL
          </h2>
          <p className="text-center text-muted mb-4">
            Conselho Tutelar - Panambi | Rua: Hermann Mayer, 43, Térreo, Centro, Panambi/RS.
            <br />
            Fone (55) 3375 6592/84195737 Email: conselhotutelar@panambi.rs.gov.br
          </p>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formGridDataTermo">
                <Form.Label>Data do Termo</Form.Label>
                <Form.Control
                  type="date"
                  name="dataTermo"
                  value={formData.dataTermo}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formGridHoraTermo">
                <Form.Label>Hora do Termo</Form.Label>
                <Form.Control
                  type="time"
                  name="horaTermo"
                  value={formData.horaTermo}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formAplicacaoMedidasTexto">
              <Form.Label>Aplico às medidas de proteção aos pais/responsável:</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="aplicacaoMedidasTexto"
                value={formData.aplicacaoMedidasTexto}
                onChange={handleChange}
                placeholder="Descreva a quem se aplica a medida e detalhes relevantes"
                required
              />
            </Form.Group>

            <div className="mb-4">
              <p className="fw-bold text-dark">conforme Artigo 129 da Lei 8.069/90, inciso:</p>

              <Form.Check
                type="checkbox"
                id="medidaI"
                name="medidaI"
                label="( I ) - encaminhamento a programa oficial ou comunitário de proteção à família;"
                checked={formData.medidaI}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaII"
                name="medidaII"
                label="( II ) - encaminhamento a serviços e programas oficiais ou comunitários de proteção, apoio e promoção da família; (Redação dada pela Lei nº 13.257, de 2016)"
                checked={formData.medidaII}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaIII"
                name="medidaIII"
                label="( III ) - inclusão em programa oficial ou comunitário de auxílio, orientação e tratamento a alcoólatras e toxicômanos;"
                checked={formData.medidaIII}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaIV"
                name="medidaIV"
                label="( IV ) - encaminhamento a tratamento psicológico ou psiquiátrico;"
                checked={formData.medidaIV}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaV"
                name="medidaV"
                label="( V ) - encaminhamento a cursos ou programas de orientação;"
                checked={formData.medidaV}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaVI"
                name="medidaVI"
                label="( VI ) - obrigação de matricular o filho ou pupilo e acompanhar sua frequência e aproveitamento escolar;"
                checked={formData.medidaVI}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaVII"
                name="medidaVII"
                label="( VII ) - obrigação de encaminhar a criança ou adolescente a tratamento especializado;"
                checked={formData.medidaVII}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaVIII"
                name="medidaVIII"
                label="( VIII ) - advertência"
                checked={formData.medidaVIII}
                onChange={handleChange}
                className="mb-2"
              />
            </div>

            <div className="text-center mb-4 mt-5"> {/* Adicionado mt-5 para espaçamento */}
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

export default TermoMedidasResponsaveis;