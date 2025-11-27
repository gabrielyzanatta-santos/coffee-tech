const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = 3000;

// Variável Global para guardar a conexão
let connection = null;

// MIDDLEWARES (Configurações)
app.use(express.json()); // Permite ler JSON enviado pelo frontend
app.use(express.static('public')); // Serve os arquivos da pasta public

// --- ROTAS DA API (O CRUD) ---

// 1. LEITURA (GET)
app.get('/usuarios', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar usuários');
  }
});

// 2. CRIAÇÃO (POST)
app.post('/usuarios', async (req, res) => {
  const { nome, email } = req.body;
  try {
    // As '?' protegem o banco contra hackers (SQL Injection)
    await connection.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email]);
    res.status(201).send('Criado com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao cadastrar');
  }
});

// 3. REMOÇÃO (DELETE)
app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await connection.query('DELETE FROM usuarios WHERE id = ?', [id]);
    res.send('Usuário deletado');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao deletar');
  }
});

// --- INICIALIZAÇÃO ---

const startServer = async () => {
  // Conecta no banco antes de abrir o servidor
  connection = await connectDB();
  
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📡 Painel Admin disponível em http://localhost:${PORT}/admin.html`);
  });
};git

startServer();