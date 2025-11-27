const mysql = require('mysql2/promise');
// BUG 8 (Correção): O arquivo .env agora está sendo lido
require('dotenv').config(); 

const connectDB = async () => {
    try {
        // BUG 9 (Correção): Os nomes das variáveis process.env.XXX agora batem com o arquivo .env
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST, 
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('🔌 MySQL Conectado com Sucesso!');

        return connection;
    } catch (error) {
        console.error('Erro ao conectar ao MySQL:', error.message);
        process.exit(1);
    }
};

// BUG 10 (Correção): Estamos exportando a função direta, e não um objeto
module.exports = connectDB;