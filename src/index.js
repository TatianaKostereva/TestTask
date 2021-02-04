import React from 'react';
import ReactDOM from 'react-dom';
import DBProducts from "@/db/DBProducts";
import ProductList from '@/catalog/ProductList/ProductList';
import Cart from '@/core/Cart';

ReactDOM.render(
  (
  <DBProducts>
    <Cart>
      <ProductList />
    </Cart>
  </DBProducts>
  ),
  document.querySelector('#root'),
);

