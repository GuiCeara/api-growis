import db from '../config/db.js';

// Função para obter todos os produtos
export const getProducts = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM produtos');
        return rows;
    } catch (err) {
        throw new Error(`Erro ao buscar produtos: ${err.message}`);
    }
};

// Função para obter um produto específico
export const getProductById = async (id) => {
    try {
        const [rows] = await db.query('SELECT * FROM produtos WHERE id = ?', [id]);
        return rows[0];
    } catch (err) {
        throw new Error(`Erro ao buscar produto: ${err.message}`);
    }
};

// Função para inserir um novo produto
export const insertProduct = async (data) => {
    const { nome, categoria, umidade, temperatura, dataPlantio, fk_estufa_id } = data;
    try {
        const result = await db.query(
            'INSERT INTO produtos (nome, categoria, umidade, temperatura, dataPlantio, fk_estufa_id) VALUES (?, ?, ?, ?, ?, ?)',
            [nome, categoria, umidade, temperatura, dataPlantio, fk_estufa_id]
        );
        return result.insertId;  // Retorna o ID do novo produto inserido
    } catch (err) {
        throw new Error(`Erro ao inserir produto: ${err.message}`);
    }
};


// Função para atualizar um produto
export const updateProduct = async (id, data) => {
    const { nome, categoria, umidade, temperatura, dataPlantio,  } = data;
    try {
        const result = await db.query(
            'UPDATE produtos SET nome = ?, categoria = ?, umidade = ?, temperatura = ?, dataPlantio = ? WHERE id = ?',
            [nome, categoria, umidade, temperatura, dataPlantio, id]
        );
        return result;
    } catch (err) {
        throw new Error(`Erro ao atualizar produto: ${err.message}`);
    }
};
