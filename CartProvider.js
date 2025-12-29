import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (newItem) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.title === newItem.title
      );

      if (existingIndex !== -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [...prevItems, { ...newItem, quantity: 1 }];
    });
  };

  const removeItemFromCart = (title) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  const cartContext = {
    items: items,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;