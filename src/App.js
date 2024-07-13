import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './pages/navigation';
import Home from './pages/home';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Konstante Navigation am oberen Rand */}
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                {/* Inhalte unter der Navigation */}

            </div>
        </Router>
    );
}

export default App;
