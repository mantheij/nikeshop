import React, { useEffect, useState } from 'react';
import './ProductGrid.css';
import axios from 'axios';
import { Link } from "react-router-dom";

function ProductGrid({ filterFn, title }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            const fetchedProducts = response.data
                .filter(filterFn)
                .map(product => ({
                    ...product,
                    category_id: product.category_id,
                }))
                .sort((a, b) => a.category_id - b.category_id);

            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const handleSearch = (e) => {
            const value = e.detail.toLowerCase();
            setSearchTerm(value);

            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(value)
            );
            setFilteredProducts(filtered);
        };

        window.addEventListener('search', handleSearch);

        return () => {
            window.removeEventListener('search', handleSearch);
        };
    }, [products]);

    if (error) {
        return <div id="error">Error: {error}</div>;
    }

    return (
        <div className="shop-container">
            <h1 className={"title-text"}>{title}</h1>

            <div className="grid-container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.product_id} className="grid-item">
                            <Link to={`/products/${product.product_id}`}>
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Link>
                            <p style={{ marginBottom: '0' }}>{product.name}</p>
                            <p style={{ fontSize: '85%', marginTop: '2px' }}>{product.price}$</p>
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
