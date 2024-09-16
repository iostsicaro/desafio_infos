# Gerenciamento de Veículos

Este projeto foi desenvolvido como parte do desafio para a vaga de Desenvolvedor Frontend na Infos. O desafio consistiu em criar uma aplicação para o gerenciamento de veículos, permitindo adicionar ou remover novos e veículos existentes. O projeto integra as stacks de frontend, backend e banco de dados, utilizando uma API REST, desenvolvida por mim, como base para os dados dos veículos.

## Funcionalidades

- **Listar Veículos**: Exibe uma lista de veículos utilizando dados da API REST.
- **Adicionar/Remover Veículos**: Permite ao usuário adicionar ou remover novos e veículos existentes.
- **Detalhes do Veículo**: Exibe informações detalhadas nos cards.
- **Gerenciamento de Estado**: Utiliza `useLocalStorage` para persistir a token do usuário.
  
## Tecnologias Utilizadas

### Frontend

- **Angular v18.20**: Utilizado para a construção da interface do usuário.
- **PrimeNG**: Para estilização des componentes.

### Backend

- **Node.js**
- **Express**
- **Knex.js**
- **PostgreSQL**
- **Jsonwebtoken**
- **dotenv**
- **bcrypt**

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- PostgreSQL

### Passos para Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/iostsicaro/desafio_infos.git
   cd desafio_infos

2. **Instale as dependências do backend:**
   ```bash
   cd vehicles-api-backend
   npm install

3. **Configure o banco de dados: Crie um banco de dados PostgreSQL e configure as variáveis de ambiente no arquivo .env.**
   ```bash
   PORT=
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_DATABASE=
   
   SH_SECRET=

4. **Inicie o servidor backend utilizando nodemon com o seguinte script:**
   ```bash
   npm run dev

5. **Instale as dependências do frontend:**
   ```bash
   cd vehicles-frontend
   npm install

6. **Inicie o servidor frontend:**
   ```bash
   ng serve

7. **Acesse a aplicação:**
   O frontend estará disponível em http://localhost:4200
   O backend estará disponível em http://localhost:3000

**Requisitos Funcionais que não foram desenvolvidos:**
- Responsividade
----------------------------------------------------------------------------------------------------

Contato
Caso tenha alguma dúvida ou sugestão, entre em contato:

Nome: Ícaro Oliveira Santos
E-mail: iostsicaro@gmail.com
Linkedin: https://www.linkedin.com/in/santosicaro/

Desenvolvido por Ícaro Oliveira Santos como parte do desafio para a vaga de Desenvolvedor Frontend na Infos.
Esse README.md cobre os aspectos principais do projeto e fornece instruções claras para que qualquer pessoa consiga rodá-lo localmente.
