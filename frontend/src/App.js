import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './pages/SideNavigations/Navigation';
import NikeLogo from './pages/SideNavigations/Navigation2';
import Home from './pages/Home';
import ShopAll from './pages/Shop/ShopAll';
import ShopMen from './pages/Shop/ShopMen';
import ShopWomen from './pages/Shop/ShopWomen';
import ShopKids from './pages/Shop/ShopKids';
import Imprint from './pages/BottomPanel/imprint';
import BottomPanel from './pages/BottomPanel/bottomPanel';
import Support from "./pages/BottomPanel/support";
import Tos from "./pages/BottomPanel/tos";
import Product from "./pages/Shop/Product";



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
                    <Route path="/shop/all" element={<ShopAll />} />
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
