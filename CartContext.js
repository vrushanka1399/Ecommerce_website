import React from 'react';

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (title) => {}
});

export default CartContext;