import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; // Reutiliza o mesmo arquivo CSS para a estilização

function TermoMedidasCriancaAdolescente() {
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
    console.log('Dados do Termo de Medidas para Criança/Adolescente:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados, por exemplo, para uma API
    alert('Termo de Medidas enviado! Verifique o console para os dados.');
  };

  return (
    <Container className="my-5 form-container">
      <Card className="shadow-lg p-4 form-card">
        <Card.Body>
          <h2 className="text-center mb-4 text-primary">
            <i className="bi bi-person-fill-exclamation me-2"></i>TERMO APLICAÇÃO MEDIDAS PARA A CRIANÇA OU ADOLESCENTE
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
              <Form.Label>Aplico às medidas de proteção à criança/adolescente:</Form.Label>
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
              <p className="fw-bold text-dark">conforme Artigo Art. 101, da Lei 8.069/90, inciso:</p>

              <Form.Check
                type="checkbox"
                id="medidaI"
                name="medidaI"
                label="( I ) - encaminhamento aos pais ou responsável, mediante termo de responsabilidade;"
                checked={formData.medidaI}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaII"
                name="medidaII"
                label="( II ) - orientação, apoio e acompanhamento temporários;"
                checked={formData.medidaII}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaIII"
                name="medidaIII"
                label="( III ) - matrícula e frequência obrigatórias em estabelecimento oficial de ensino fundamental;"
                checked={formData.medidaIII}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaIV"
                name="medidaIV"
                label="( IV ) - inclusão em programa comunitário ou oficial de auxílio à família, à criança e ao adolescente;"
                checked={formData.medidaIV}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaV"
                name="medidaV"
                label="( V ) - inclusão em serviços e programas oficiais ou comunitários de proteção, apoio e promoção da família, da criança e do adolescente; (Redação dada pela Lei nº 13.257, de 2016)"
                checked={formData.medidaV}
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="medidaVI"
                name="medidaVI"
                label="( VI ) - requisição de tratamento médico, psicológico ou psiquiátrico, em regime hospitalar ou ambulatorial;"
                checked={formData.medidaVI}
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

export default TermoMedidasCriancaAdolescente;