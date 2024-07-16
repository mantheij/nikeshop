import React from 'react';
import ProductGrid from './ProductGrid';

function ShopAll() {
    const filterAllProducts = () => true; // No filter, display all products

    return <ProductGrid filterFn={filterAllProducts} title="ALL ITEMS" />;
}

export default ShopAll;
