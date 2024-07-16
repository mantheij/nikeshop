import React, { useEffect, useState } from 'react';
import './Shop.css';
import axios from 'axios';
import { Link } from "react-router-dom";

function ProductGrid({ filterFn, title }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            const filteredProducts = response.data
                .filter(filterFn)
                .map(product => ({
                    ...product,
                    category_id: product.category_id,
                }))
                .sort((a, b) => a.category_id - b.category_id);

            setProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (error) {
        return <div id="error">Error: {error}</div>;
    }

    return (
        <div className="shop-container">
            <h1>{title}</h1>
            <div className="grid-container">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.product_id} className="grid-item">
                            <Link to={`/products/${product.product_id}`}>
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Link>
                        </div>
                    ))
                ) : (
                    <div id="loading">Loading...</div>
                )}
            </div>
        </div>
    );
}

export default ProductGrid;