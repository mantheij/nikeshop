const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const getProducts = async () => {
    try {
        const result = await pool.query('SELECT * FROM products');
        return result.rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getCategories = async () => {
    try {
        const result = await pool.query('SELECT * FROM categories');
        return result.rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getProductImages = async () => {
    try {
        const result = await pool.query('SELECT * FROM product_images');
        return result.rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = {
    getProducts,
    getCategories,
    getProductImages,
};
