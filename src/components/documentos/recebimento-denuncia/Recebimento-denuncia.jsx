import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; // Vamos criar este arquivo para estilos personalizados

function RecebimentoDenuncia() {
  const [formData, setFormData] = useState({
    dataDenuncia: '',
    horaDenuncia: '',
    tipoPessoa: 'identificada',
    identificacaoDenunciante: '',
    fatos: '',
    nomeDataNascimentoCriancaAdolescente: '',
    nomesPaisResponsaveis: '',
    endereco: '',
    conselheiroRecebeu: '',
    dataAveriguacao: '',
    conselheiroEfetuouAveriguacao: ''
  });

  const [conselheiroQuery, setConselheiroQuery] = useState('');

  useEffect(() => {
    console.log('conselheiroQuery:', conselheiroQuery);
}, [conselheiroQuery]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Formulário:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados, por exemplo, para uma API
    alert('Formulário enviado! Verifique o console para os dados.');
  };

  return (
    <Container className="my-5 form-container">
      <Card className="shadow-lg p-4 form-card">
        <Card.Body>
          <h2 className="text-center mb-4 text-primary">
          <i className="bi bi-shield-check me-2"></i>FICHA RECEBIMENTO DE DENÚNCIA
          </h2>
          <p className="text-center text-muted mb-4">
            Conselho Tutelar - Panambi | Rua: Hermann Mayer, 43, Térreo, Centro, Panambi/RS.
            <br />
            Fone (55) 3375 6592/84195737 Email: conselhotutelar@panambi.rs.gov.br
          </p>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formGridDataHora">
                <Form.Label>Data e Hora da Denúncia</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    type="date"
                    name="dataDenuncia"
                    value={formData.dataDenuncia}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control
                    type="time"
                    name="horaDenuncia"
                    value={formData.horaDenuncia}
                    onChange={handleChange}
                    className="ms-2"
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formGridTipoPessoa">
                <Form.Label>Tipo de Denunciante</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Pessoa identificada"
                    name="tipoPessoa"
                    id="radioIdentificada"
                    value="identificada"
                    checked={formData.tipoPessoa === 'identificada'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Anônima"
                    name="tipoPessoa"
                    id="radioAnonima"
                    value="anonima"
                    checked={formData.tipoPessoa === 'anonima'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Telefone"
                    name="tipoPessoa"
                    id="radioTelefone"
                    value="telefone"
                    checked={formData.tipoPessoa === 'telefone'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Pessoalmente"
                    name="tipoPessoa"
                    id="radioPessoalmente"
                    value="pessoalmente"
                    checked={formData.tipoPessoa === 'pessoalmente'}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Row>

            {formData.tipoPessoa === 'identificada' && (
              <Form.Group className="mb-3" controlId="formIdentificacaoDenunciante">
                <Form.Label>Identificação do Denunciante</Form.Label>
                <Form.Control
                  type="text"
                  name="identificacaoDenunciante"
                  value={formData.identificacaoDenunciante}
                  onChange={handleChange}
                  placeholder="Nome completo ou informações de identificação"
                  required={formData.tipoPessoa === 'identificada'}
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formFatos">
              <Form.Label>Fatos da Denúncia</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="fatos"
                value={formData.fatos}
                onChange={handleChange}
                placeholder="Descreva detalhadamente os fatos da denúncia..."
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNomeDataNascimentoCriancaAdolescente">
              <Form.Label>Nome(s) e Data(s) de Nascimento da(s) Criança(s) / Adolescente(s) com suspeita de violação</Form.Label>
              <Form.Control
                type="text"
                name="nomeDataNascimentoCriancaAdolescente"
                value={formData.nomeDataNascimentoCriancaAdolescente}
                onChange={handleChange}
                placeholder="Ex: João da Silva (01/01/2010), Maria Souza (05/03/2015)"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNomesPaisResponsaveis">
              <Form.Label>Nome(s) dos Pais ou Responsáveis</Form.Label>
              <Form.Control
                type="text"
                name="nomesPaisResponsaveis"
                value={formData.nomesPaisResponsaveis}
                onChange={handleChange}
                placeholder="Ex: Ana Paula Pereira, Carlos Alberto Lima"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndereco">
              <Form.Label>Endereço Completo</Form.Label>
              <Form.Control
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                placeholder="Rua, Número, Bairro, Cidade, Estado, CEP"
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formConselheiroRecebeu">
                <Form.Label>Conselheiro Tutelar que recebeu a denúncia</Form.Label>
                <Form.Control
                  type="text"
                  name="conselheiroRecebeu"
                  value={conselheiroQuery}
                  onChange={(e) => setConselheiroQuery(e.target.value)}
                  placeholder="Nome do Conselheiro"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formGridDataAveriguacao">
                <Form.Label>Data da Averiguação</Form.Label>
                <Form.Control
                  type="date"
                  name="dataAveriguacao"
                  value={formData.dataAveriguacao}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-4" controlId="formConselheiroEfetuouAveriguacao">
              <Form.Label>Conselheiro Tutelar que efetuou Averiguação</Form.Label>
              <Form.Control
                type="text"
                name="conselheiroEfetuouAveriguacao"
                value={formData.conselheiroEfetuouAveriguacao}
                onChange={handleChange}
                placeholder="Nome do Conselheiro"
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

export default RecebimentoDenuncia;