import { getProducts, getProductById, updateProduct } from '../models/productModel.js';

// Obter todos os produtos
export const getAllProducts = async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (err) {
        res.status(500).send(`Erro ao buscar produtos: ${err.message}`);
    }
};

// Obter um produto específico
export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await getProductById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (err) {
        res.status(500).send(`Erro ao buscar produto: ${err.message}`);
    }
};

// Atualizar um produto
export const updateProductDetails = async (req, res) => {
    const { id } = req.params;
    const { nome, categoria, umidade, temperatura, dataPlantio } = req.body;
    try {
        await updateProduct(id, { nome, categoria, umidade, temperatura, dataPlantio });
        res.status(200).send('Produto atualizado com sucesso');
    } catch (err) {
        res.status(500).send(`Erro ao atualizar produto: ${err.message}`);
    }
};
