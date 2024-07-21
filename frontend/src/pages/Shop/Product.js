import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Product.css'

function Product() {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

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
            <h1 className={'title-text'} style={{ top: '75%' }}>{product.name}</h1>
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

            <div className="quantity-container" style={{ position: 'absolute', top: '38.5%', left: '70%', display: 'flex', alignItems: 'center', gap:'10px' }}>
                <button 
                    className={'quantity-button'}
                    onClick={() => setQuantity(prevQuantity => prevQuantity < product.stock_quantity ? prevQuantity + 1 : product.stock_quantity)}
                >
                    +
                </button>
                <p className ={'quantity-text'}>{quantity}</p>
               <button 
                    className={'quantity-button'}
                    onClick={() => setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1)}
                >
                    -
                </button>
            </div>
            
            <button
                style={{ position: 'absolute', top: '45%', left: '70%' }}
               // onClick={() => }
            >
                ADD TO CART
            </button>
        </div>
    );
}

export default Product;
