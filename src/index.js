import React from 'react';
import ReactDOM from 'react-dom';
import DBProducts from "@/db/DBProducts";
import ProductList from '@/components/catalogOfProducts/ProductList';

ReactDOM.render(
  (
  <DBProducts>
    <ProductList />
  </DBProducts>
  ),
  document.querySelector('#root'),
);

