import React from 'react';
import ReactDOM from 'react-dom';
import DBProducts from "@/db/DBProducts";
import ProductList from '@/catalog/ProductList/ProductList';
import { Provider } from 'react-redux';
import store from '@/store';

ReactDOM.render(
  (
  <DBProducts>
    <Provider store={store}>
      <ProductList />
    </Provider>
  </DBProducts>
  ),
  document.querySelector('#root'),
);

