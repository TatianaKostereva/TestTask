import React, { useContext } from 'react';
import { DBProductsContext } from "@/db/DBProducts";
import ProductListView from '@/components/catalogOfProducts/ProductListView';

const ProductList = () => {

  const productsList = useContext(DBProductsContext);

  return (
    <div className="product-list">
      <main className="grid container">
        <div className="sub_category_page">
          <div className="column_right column_right_products_container">
            <div className="product__area">
              <div id="products_section">
                <div className="products_page pg_0">
                  {productsList && productsList.map((product) => <ProductListView key={product.productID} product={product} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductList;