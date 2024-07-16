import React from 'react';
import ProductGrid from './ProductGrid';

function ShopKids() {
    const filterKidsProducts = (product) => product.gender === 'KIDS';

    return <ProductGrid filterFn={filterKidsProducts} title="KIDS' ITEMS" />;
}

export default ShopKids;
