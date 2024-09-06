import express from 'express';
import { getAllProducts } from '../controllers/productController.js';

const router = express.Router();

// Rota para obter todos os usuários
router.get('/products', getAllProducts);



export default router;
