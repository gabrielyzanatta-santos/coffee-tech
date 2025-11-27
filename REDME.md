# ☕ CoffeeTech - Plataforma & API

Este projeto é uma aplicação Fullstack desenvolvida para a startup fictícia **CoffeeTech**. O sistema consiste em uma Landing Page promocional, um Painel Administrativo para gerenciamento de leads (interessados) e uma API RESTful robusta conectada a um banco de dados MySQL.

## 🚀 Funcionalidades

### Frontend
* **Landing Page:** Página de apresentação dos produtos ("Grão Focus", "NodePress", etc.).
* **Painel Administrativo:** Interface para gerenciar usuários (CRUD).
    * Listagem de clientes.
    * Cadastro de novos clientes.
    * **Edição de dados (Atualização segura).**
    * Remoção de clientes.

### Backend (API)
* **Node.js & Express:** Servidor rápido e escalável.
* **MySQL Database:** Persistência de dados segura.
* **Arquitetura MVC Simplificada:** Separação entre rotas, conexão de banco e arquivos estáticos.
* **Segurança:** Uso de *Prepared Statements* (evita SQL Injection) e variáveis de ambiente (.env).

## 🛠️ Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MySQL2](https://github.com/sidorares/node-mysql2) (com Promises)
* [Dotenv](https://www.npmjs.com/package/dotenv) (Gerenciamento de variáveis de ambiente)
* HTML5 & CSS3

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:
* [Node.js](https://nodejs.org/) (v14 ou superior)
* [MySQL Server](https://dev.mysql.com/downloads/mysql/)

## ⚙️ Instalação e Configuração

### 1. Configuração do Banco de Dados
Acesse seu MySQL Workbench ou Terminal e execute o seguinte comando para criar a tabela necessária:

```sql
CREATE DATABASE coffeetech_db;

USE coffeetech_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);