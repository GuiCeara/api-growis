import { createPool } from 'mysql2/promise';

// arrumar o .env

const db = createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, 
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'growis',                           // process.env.DB_NAME
});

(async () => {
    try {
        const connection = await db.getConnection();
        console.log(process.env.DB_HOST);
        console.log(process.env.DB_PORT);
        console.log(process.env.DB_PASSWORD);
        console.log('Conexão bem-sucedida ao banco de dados!');
        connection.release();
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
})();

export default db;
