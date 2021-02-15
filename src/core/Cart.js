import React, { useState } from 'react';

export const CartContext = React.createContext(
  [],
);

const Cart = ({ children }) => {
  const [products, setProducts] = useState({});

  const deleteProduct = (id) => {
    const newProductsList = {...products};
    delete newProductsList[id];

    setProducts(newProductsList);
  };

  const changeQuantityProduct = (id, quantity) => {
    const newProductsList = {...products};
    newProductsList[id] = (newProductsList[id] || 0) + quantity;

    setProducts(newProductsList);
  }

  const cart = {
    cart: products,
    deleteProduct,
    changeQuantityProduct,
  };

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;