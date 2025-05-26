# API-Cadastro-NodeJS

Uma API simples para cadastro e listagem de usuários, desenvolvida com fins de estudo utilizando **Node.js**, **Express** e **JavaScript** puro.

## 🚀 Objetivo

Este projeto tem como finalidade praticar e demonstrar conceitos fundamentais de construção de APIs RESTful utilizando o ambiente Node.js, com foco no cadastro e listagem de usuários.

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JavaScript

## 📁 Estrutura do Projeto

```
API-Cadastro-NodeJS/
├── src/
│   ├── data/
│   ├── routes/
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## ▶️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/brunocmg/API-Cadastro-NodeJS.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd API-Cadastro-NodeJS
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   node src/index.js
   ```

A API ficará disponível por padrão em `http://localhost:3000`.

## 📌 Endpoints

### ➕ Cadastrar Usuário

- **URL:** `POST /usuarios`
- **Body (JSON):**
  ```json
  {
    "nome": "João Silva",
    "email": "joao@example.com"
  }
  ```

### 📄 Listar Usuários

- **URL:** `GET /usuarios`

## 🧪 Como Testar a API (Thunder Client ou Postman)

### 🔹 Usando Thunder Client (recomendado no VS Code)

1. Instale a extensão **Thunder Client** no VS Code.
2. Vá até a aba lateral do Thunder Client.
3. Crie uma nova requisição:
   - Método: `POST`
   - URL: `http://localhost:3000/usuarios`
   - Aba **Body** > selecione `JSON` e insira:
     ```json
     {
       "nome": "João da Silva",
       "email": "joao@example.com"
     }
     ```
   - Clique em **Send** para enviar.
4. Para listar os usuários cadastrados:
   - Método: `GET`
   - URL: `http://localhost:3000/usuarios`
   - Clique em **Send**.

### 🔹 Usando Postman

1. Abra o Postman.
2. Crie uma requisição do tipo **POST**:
   - URL: `http://localhost:3000/usuarios`
   - Aba **Body** > `raw` > selecione `JSON`, e insira o JSON como mostrado acima.
3. Para listar:
   - Faça uma nova requisição do tipo **GET** na mesma URL, sem body.

---

## 📚 Finalidade

Este projeto foi desenvolvido com fins de aprendizado pessoal, sem fins comerciais.
