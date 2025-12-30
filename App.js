import './App.css';
import React from "react";
import Products from './Products';
import Cart from './Cart';

import { Routes, Route, NavLink } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div>

      {/* Simple Navbar */}
      <nav style={{ padding: '10px', background: '#f2f2f2' }}>
        <NavLink to="/" style={{ marginRight: '20px' }}>
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>
      </nav>

      {/* Cart button */}
      <Cart />

      {/* Routes decide which page to show */}
      <Routes>
        <Route path="/" element={
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
