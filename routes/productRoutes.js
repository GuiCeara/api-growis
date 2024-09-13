import express from 'express';
import { getAllProducts, getProduct, updateProductDetails } from '../controllers/productController.js';

const router = express.Router();

// Rota para obter todos os produtos
router.get('/products', getAllProducts);

// Rota para obter um produto específico
router.get('/products/:id', getProduct);

// Rota para atualizar um produto
router.put('/products/:id', updateProductDetails);

export default router;
