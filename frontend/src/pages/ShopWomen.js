import React from 'react';
import ProductGrid from './ProductGrid';

function ShopWomen() {
    const filterWomenProducts = (product) => product.gender === 'WOMEN' || product.gender === 'UNISEX';

    return <ProductGrid filterFn={filterWomenProducts} title="WOMEN'S ITEMS" />;
}

export default ShopWomen;
