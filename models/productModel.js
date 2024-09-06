import db from '../config/db.js';

const getProducts = (callback) => {
    db.query('SELECT * FROM produtos', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

export default getProducts; // Exportação padrão
