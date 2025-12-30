import './App.css';
import React from "react";
import Products from './Products';
import Cart from './Cart';

import { Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav style={{
        padding: '15px',
        background: '#f2f2f2',
        display: 'flex',
        gap: '20px'
      }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Store</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Cart />

      {/* Route mapping */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={
          <>
            <h2 className="text-center mt-3">Products</h2>
            <Products />
          </>
        } />

        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;