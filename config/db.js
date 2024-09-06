import { createPool } from 'mysql2/promise';

const db = createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

(async () => {
    try {
        const connection = await db.getConnection();
        console.log('Conexão bem-sucedida ao banco de dados!');
        connection.release();
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
})();

export default db;
