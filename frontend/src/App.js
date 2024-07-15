import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './pages/navigation';
import NikeLogo from './pages/nikeLogo';
import Home from './pages/home';
import Shop from './pages/shop';
import Imprint from './pages/bottomPanel/imprint';
import BottomPanel from './pages/bottomPanel/bottomPanel';
import Support from "./pages/bottomPanel/support";
import Tos from "./pages/bottomPanel/tos";



function App() {

    return (
        <Router>
            <div className="App">
                {/* Navigation on the borders*/}
                <BottomPanel />
                <NikeLogo />
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/tos" element={<Tos />} />
                    <Route path="/shop/all" element={<Shop />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
