import React, { useMemo, useEffect, useState } from 'react';
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

 const productsStore = useMemo(() => productsList, [productsList]);

  return (
    <DBProductsContext.Provider value={productsStore}>
      {children}
    </DBProductsContext.Provider>
  );
};

export default DBProducts;