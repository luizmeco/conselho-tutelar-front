Sistema de Gestão do Conselho Tutelar de Panambi/RS
Este projeto é uma aplicação web desenvolvida em React para auxiliar na gestão das atividades do Conselho Tutelar de Panambi, Rio Grande do Sul. Ele oferece formulários padronizados para registro de denúncias, atendimentos, notificações e termos de aplicação de medidas, além de um painel administrativo para gerenciamento de profissionais.

Funcionalidades Principais
Ficha de Recebimento de Denúncia: Registro detalhado de denúncias recebidas.

Ficha de Atendimento: Documentação de atendimentos realizados.

Notificação: Geração de notificações e suas segundas vias.

Termo de Aplicação de Medidas (Pais/Responsáveis): Registro de medidas aplicadas a pais ou responsáveis, conforme o ECA.

Termo de Aplicação de Medidas (Criança/Adolescente): Registro de medidas de proteção aplicadas a crianças ou adolescentes, conforme o ECA.

Painel Administrativo:

Gerenciar Profissionais: Visualização em formato de cards de todos os profissionais cadastrados, com opção de edição.

Cadastrar Novo Profissional: Formulário para inclusão de novos membros na equipe.

Navegação Intuitiva: Menu principal com barra de pesquisa para fácil acesso aos formulários.

Design Moderno e Responsivo: Interface de usuário limpa, intuitiva e adaptável a diferentes tamanhos de tela, utilizando React e Bootstrap.

Tecnologias Utilizadas
React.js: Biblioteca JavaScript para construção da interface de usuário.

React-Router-DOM: Para gerenciamento de rotas na aplicação single-page.

React-Bootstrap: Componentes Bootstrap reutilizáveis para React, facilitando a estilização e o layout responsivo.

Bootstrap CSS: Framework CSS para estilização base.

Bootstrap Icons: Biblioteca de ícones para elementos visuais.

CSS Personalizado: Estilos adicionais para atender ao design específico do projeto.

Como Rodar o Projeto Localmente
Para configurar e executar este projeto em sua máquina local, siga os passos abaixo:

Pré-requisitos
Certifique-se de ter o Node.js e o npm (Node Package Manager) ou Yarn instalados em seu sistema.

Node.js (inclui npm)

Yarn (Opcional)

Instalação
Clone o repositório:

Bash

git clone <URL_DO_SEU_REPOSITORIO>
cd <nome_da_pasta_do_projeto>
(Substitua <URL_DO_SEU_REPOSITORIO> pelo link do seu repositório Git.)

Instale as dependências:
Utilizando npm:

Bash

npm install
Ou utilizando Yarn:

Bash

yarn install
Executando a Aplicação
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento.

Utilizando npm:

Bash

npm run dev
Ou utilizando Yarn:

Bash

yarn dev
Isso iniciará a aplicação em modo de desenvolvimento. Geralmente, ela estará disponível em http://localhost:5173 (ou outra porta disponível). O terminal indicará o endereço exato.

Estrutura do Projeto
.
├── public/
│   └── logo.png        # Logo do Conselho Tutelar
├── src/
│   ├── assets/
│   │   └── logo.png    # Imagens e outros ativos
│   ├── components/
│   │   └── NavBar.jsx  # Componente de barra de navegação (se houver)
│   ├── pages/          # Componentes de páginas completas
│   │   ├── cadastrarProfissionais/
│   │   │   ├── CadastrarProfissional.jsx
│   │   │   └── CadastrarProfissional.css
│   │   ├── documentos/ # Agrupamento para documentos/formulários
│   │   │   ├── ficha-atendimento/
│   │   │   │   ├── FichaAtendimento.jsx
│   │   │   │   └── FichaAtendimento.css
│   │   │   ├── notificacao/
│   │   │   │   ├── Notificacao.jsx
│   │   │   │   └── Notificacao.css
│   │   │   ├── recebimento-denuncia/
│   │   │   │   ├── RecebimentoDenuncia.jsx
│   │   │   │   └── RecebimentoDenuncia.css
│   │   │   ├── termo-medidas-crianca/
│   │   │   │   ├── TermoMedidasCrianca.jsx
│   │   │   │   └── TermoMedidasCrianca.css
│   │   │   └── termo-medidas-responsaveis/
│   │   │       ├── TermoMedidasResponsaveis.jsx
│   │   │       └── TermoMedidasResponsaveis.css
│   │   │   └── style.css # CSS comum para documentos/formulários? (verificar uso)
│   │   ├── error/
│   │   │   └── ErrorPage.jsx
│   │   ├── gerenciarProfissionais/
│   │   │   ├── GerenciarProfissionais.jsx
│   │   │   └── GerenciarProfissionais.css
│   │   ├── home/
│   │   │   └── Home.jsx # Página inicial ou Dashboard
│   │   ├── menu/         # Menu principal da aplicação (DashboardMenu renomeado?)
│   │   │   ├── Menu.jsx
│   │   │   └── Menu.css
│   │   └── perfilAdministrador/
│   │       ├── PerfilAdministrador.jsx
│   │       └── PerfilAdministrador.css
│   ├── App.jsx           # Componente principal que define as rotas
│   ├── index.css         # CSS global principal
│   ├── Login.jsx         # Componente de login
│   ├── Login.css
│   └── main.jsx          # Ponto de entrada da aplicação React (antigo index.js)
├── package.json          # Dependências e scripts do projeto