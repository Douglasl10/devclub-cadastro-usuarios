
# 👤 Cadastro de Usuários - DevClub

![Badge Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Badge Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Badge Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)

> API simples para cadastro, listagem, edição e exclusão de usuários. Projeto desenvolvido como prática dos fundamentos de Node.js e Express no DevClub.

---

## 🚀 Funcionalidades

- ✅ Criar novo usuário
- ✅ Listar todos os usuários
- ✅ Atualizar dados de um usuário
- ✅ Deletar um usuário
- ✅ Verificação de existência via middleware
- ✅ Dados armazenados em memória

---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

<img src="https://github.com/Douglasl10/devclub-cadastro-usuarios-main/blob/main/src/assets/cadastro-de-usuario.png"/>

## 📂 Estrutura do projeto


---

## 📦 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/Douglasl10/devclub-cadastro-usuarios

# Acesse a pasta do projeto
cd devclub-cadastro-usuarios

# Instale as dependências
npm install

# Inicie o servidor com nodemon
npm run dev

🔄 Exemplos de rotas

Método	Rota	Descrição
POST	/users	Cadastrar um novo usuário
GET	/users	Listar todos os usuários
PUT	/users/:id	Atualizar um usuário existente
DELETE	/users/:id	Remover um usuário




