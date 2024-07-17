import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

function Product() {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const { addToCart } = useCart();

    const getProductData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/products/${id}`);
            setProduct(response.data);
        } catch (e) {
            console.error('Error fetching product data:', e);
            setError('Error fetching product data');
        }
    };

    useEffect(() => {
        getProductData();
    }, [id]);

    if (error) {
        return <div id="error">Error: {error}</div>;
    }

    if (!product) {
        return <div id="error">Loading...</div>;
    }

    return (
        <div>
            <h1 style={{ top: '75%' }}>{product.name}</h1>
            <img
                style={{
                    maxWidth: '30%',
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                src={product.image_url}
                alt="Product Image"
            />
            <p style={{ position: 'absolute', top: '25%', left: '70%' }}>{product.description}</p>
            <p style={{ position: 'absolute', top: '30%', left: '70%' }}>{product.price} $ </p>
            <p style={{ position: 'absolute', top: '35%', left: '70%' }}>In Stock: {product.stock_quantity}</p>
            <button
                style={{ position: 'absolute', top: '40%', left: '70%' }}
                onClick={() => addToCart(product)}
            >
                ADD TO CART
            </button>
        </div>
    );
}

export default Product;
