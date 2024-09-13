import express from 'express';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware para parsing JSON
app.use(express.json());

// Definir rotas
app.use('/api', productRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
