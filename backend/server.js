const express = require('express');
require('dotenv').config();

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const productImageRoutes = require('./routes/productImageRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/product_images', productImageRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
