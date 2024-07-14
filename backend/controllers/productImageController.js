const pool = require('../db');

const getProductImages = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM product_images');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getProductImages,
};
