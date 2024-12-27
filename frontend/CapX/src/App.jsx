import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddStock from './pages/AddStock';
// Import other pages like About, Dashboard, Add Stock here

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/dashboard" element={<div>Dashboard Page</div>} />
                <Route path="/add-stock" element={<AddStock/>} />
            </Routes>
        </>
    );
};

export default App;
