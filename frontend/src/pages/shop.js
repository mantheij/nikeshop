import React, { useEffect, useState } from 'react';
import './shop.css';
import axios from 'axios';

function Shop() {
    const [imageData, setImageData] = useState(null);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const id = 2;
            const response = await axios.get(`http://localhost:5000/product_images/${id}`);
            setImageData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <h1 style={{ fontSize: '180%', position: 'fixed', top: '5%' }}>Product Image</h1>
            {imageData ? (
                <div>
                    <img src={imageData.image_url} alt="Product"
                         style={{width: '500px', height:'auto', position:'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Shop;
