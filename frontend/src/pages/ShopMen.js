import React from 'react';
import ProductGrid from './ProductGrid';

function ShopMen() {
    const filterMenProducts = (product) => product.gender === 'MEN' || product.gender === 'UNISEX';

    return <ProductGrid filterFn={filterMenProducts} title="MEN'S ITEMS" />;
}

export default ShopMen;
