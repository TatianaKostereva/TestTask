import React, { useState } from 'react';

export const CartContext = React.createContext(
  [],
);

const Cart = ({ children }) => {
  const [products, setProducts] = useState({});

  const deleteProduct = (id) => {
    const newProductsList = {...products};
    delete newProductsList[id];
  };

  const cart = {
    cart: products,
    deleteProduct,
  };

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;