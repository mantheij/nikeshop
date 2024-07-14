const express = require('express');
const { getProductImages } = require('../controllers/productImageController');

const router = express.Router();

router.get('/', getProductImages);

module.exports = router;
