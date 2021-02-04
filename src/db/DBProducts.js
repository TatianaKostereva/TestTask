import React, { useEffect, useState } from 'react';
import loadProducts from '../services/loadProducts';

export const DBProductsContext = React.createContext(
  [],
);

const DBProducts = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    loadProducts('./data/products.json')
      .then((data) => {
        setProductsList(data);
      });
  }, []);

  return (
    <DBProductsContext.Provider value={productsList}>
      {children}
    </DBProductsContext.Provider>
  );
};

export default DBProducts;