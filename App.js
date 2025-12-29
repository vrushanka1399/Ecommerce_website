import logo from './logo.svg';
import './App.css';
import Products from './Products';
import React from "react";
import Cart from './Cart';

function App() {
  return (
    <div>
      {/* Cart button at the top */}
      <Cart />

      <h2 className="text-center mt-3">Products</h2>
      <Products />
    </div>
  );
}

export default App;
