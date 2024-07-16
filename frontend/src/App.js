import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './pages/Navigation';
import NikeLogo from './pages/NikeLogo';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopMen from './pages/ShopMen';
import ShopWomen from './pages/ShopWomen';
import ShopKids from './pages/ShopKids';
import Imprint from './pages/bottomPanel/imprint';
import BottomPanel from './pages/bottomPanel/bottomPanel';
import Support from "./pages/bottomPanel/support";
import Tos from "./pages/bottomPanel/tos";
import Product from "./pages/Product";



function App() {

    return (
        <Router>
            <div className="App">
                <BottomPanel />
                <NikeLogo />
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/tos" element={<Tos />} />
                    <Route path="/shop/all" element={<Shop />} />
                    <Route path="/shop/men" element={<ShopMen />} />
                    <Route path="/shop/women" element={<ShopWomen />} />
                    <Route path="/shop/kids" element={<ShopKids />} />
                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
