import getProducts from '../models/productModel.js';  // Importação do default export

export const getAllProducts = (req, res) => {
    getProducts((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
