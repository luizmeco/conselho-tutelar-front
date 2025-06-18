import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const RecebimentoDenuncia = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [numeroDenuncia, setNumeroDenuncia] = useState('');
  const [dataDenuncia, setDataDenuncia] = useState('');
  const [horaDenuncia, setHoraDenuncia] = useState('');
  const [tipoDenunciante, setTipoDenunciante] = useState({
    identificada: false,
    anonima: false,
    telefone: false,
    emPessoa: false,
    correio: false,
    mp: false,
  });
  const [identificacaoDenunciante, setIdentificacaoDenunciante] = useState('');
  const [fatos, setFatos] = useState('');
  const [nomeNascimentoCriancaAdolescente, setNomeNascimentoCriancaAdolescente] = useState('');
  const [nomesPaisResponsaveis, setNomesPaisResponsaveis] = useState('');
  const [endereco, setEndereco] = useState('');
  const [conselheiroRecebeu, setConselheiroRecebeu] = useState('');
  const [dataAveriguacao, setDataAveriguacao] = useState('');
  const [conselheiroAveriguou, setConselheiroAveriguou] = useState('');

  // Manipulador para checkboxes de tipo de denunciante
  const handleTipoDenuncianteChange = (e) => {
    const { name, checked } = e.target;
    setTipoDenunciante(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  // Manipulador de submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    const dadosDenuncia = {
      numeroDenuncia,
      dataDenuncia,
      horaDenuncia,
      tipoDenunciante,
      identificacaoDenunciante,
      fatos,
      nomeNascimentoCriancaAdolescente,
      nomesPaisResponsaveis,
      endereco,
      conselheiroRecebeu,
      dataAveriguacao,
      conselheiroAveriguou,
    };
    console.log('Dados da Denúncia:', dadosDenuncia);
    // Aqui você enviaria os dados para o seu backend ou faria outra ação
    alert('Formulário enviado! Verifique o console para os dados.');
  };

  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center mb-4">FICHA RECEBIMENTO DE DENÚNCIA</h2>
      <Form onSubmit={handleSubmit}>
        {/* Número da Denúncia */}
        <Form.Group as={Row} className="mb-3" controlId="formNumeroDenuncia">
          <Form.Label column sm="2">Nº</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="_ /_ _"
              value={numeroDenuncia}
              onChange={(e) => setNumeroDenuncia(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Data e Meio de Denúncia */}
        <Form.Group as={Row} className="mb-3 align-items-center" controlId="formDataMeioDenuncia">
          <Form.Label column sm="1">Data:</Form.Label>
          <Col sm="3">
            <Form.Control
              type="date"
              value={dataDenuncia}
              onChange={(e) => setDataDenuncia(e.target.value)}
            />
          </Col>
          <Form.Label column sm="1">às</Form.Label>
          <Col sm="2">
            <Form.Control
              type="time"
              value={horaDenuncia}
              onChange={(e) => setHoraDenuncia(e.target.value)}
            />
          </Col>
          <Col sm="5">
            <Form.Check
              inline
              type="checkbox"
              label="Pessoa identificada"
              name="identificada"
              checked={tipoDenunciante.identificada}
              onChange={handleTipoDenuncianteChange}
              id="checkIdentificada"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Anônima"
              name="anonima"
              checked={tipoDenunciante.anonima}
              onChange={handleTipoDenuncianteChange}
              id="checkAnonima"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Telefone"
              name="telefone"
              checked={tipoDenunciante.telefone}
              onChange={handleTipoDenuncianteChange}
              id="checkTelefone"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Em pessoa"
              name="emPessoa"
              checked={tipoDenunciante.emPessoa}
              onChange={handleTipoDenuncianteChange}
              id="checkEmPessoa"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Correio"
              name="correio"
              checked={tipoDenunciante.correio}
              onChange={handleTipoDenuncianteChange}
              id="checkCorreio"
            />
            <Form.Check
              inline
              type="checkbox"
              label="MP"
              name="mp"
              checked={tipoDenunciante.mp}
              onChange={handleTipoDenuncianteChange}
              id="checkMP"
            />
          </Col>
        </Form.Group>

        {/* Identificação do Denunciante */}
        <Form.Group className="mb-3" controlId="formIdentificacaoDenunciante">
          <Form.Label>Identificação do denunciante:</Form.Label>
          <Form.Control
            type="text"
            value={identificacaoDenunciante}
            onChange={(e) => setIdentificacaoDenunciante(e.target.value)}
          />
        </Form.Group>

        {/* Fatos */}
        <Form.Group className="mb-3" controlId="formFatos">
          <Form.Label className="fw-bold">FATOS:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Digite aqui...."
            value={fatos}
            onChange={(e) => setFatos(e.target.value)}
          />
        </Form.Group>

        {/* Nome e data nascimento da(s) criança(s) / adolescente(s) */}
        <Form.Group className="mb-3" controlId="formNomeNascimentoCriancaAdolescente">
          <Form.Label>Nome e data nascimento da(s) criança(s) / adolescente(s) com suspeita de violação:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite aqui...."
            value={nomeNascimentoCriancaAdolescente}
            onChange={(e) => setNomeNascimentoCriancaAdolescente(e.target.value)}
          />
        </Form.Group>

        {/* Nomes dos pais ou responsáveis */}
        <Form.Group className="mb-3" controlId="formNomesPaisResponsaveis">
          <Form.Label>Nomes dos pais ou responsáveis:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite aqui...."
            value={nomesPaisResponsaveis}
            onChange={(e) => setNomesPaisResponsaveis(e.target.value)}
          />
        </Form.Group>

        {/* Endereço */}
        <Form.Group className="mb-3" controlId="formEndereco">
          <Form.Label>Endereço:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite aqui...."
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </Form.Group>

        {/* Conselheiro Tutelar que recebeu a denúncia */}
        <Form.Group as={Row} className="mb-3" controlId="formConselheiroRecebeu">
          <Form.Label column sm="4">Conselheiro Tutelar que recebeu a denúncia:</Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              placeholder="Digite aqui...."
              value={conselheiroRecebeu}
              onChange={(e) => setConselheiroRecebeu(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Averiguação: Data */}
        <Form.Group as={Row} className="mb-3" controlId="formDataAveriguacao">
          <Form.Label column sm="2">Averiguação: Data:</Form.Label>
          <Col sm="10">
            <Form.Control
              type="date"
              value={dataAveriguacao}
              onChange={(e) => setDataAveriguacao(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Conselheiro Tutelar que efetuou Averiguação */}
        <Form.Group as={Row} className="mb-3" controlId="formConselheiroAveriguou">
          <Form.Label column sm="4">Conselheiro Tutelar que efetuou Averiguação:</Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              placeholder="Digite aqui...."
              value={conselheiroAveriguou}
              onChange={(e) => setConselheiroAveriguou(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Registrar Denúncia
        </Button>
      </Form>
    </div>
  );
};

export default RecebimentoDenuncia;