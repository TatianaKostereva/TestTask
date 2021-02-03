import React, { useContext } from 'react';
import changeQuantity from '@/utils/changeQuantity';
import switchClasses from '@/utils/switchClasses';

const ProductListView = ({ product }) => {

  if (product === undefined) {
    return false;
  }

  let srcName = (product.primaryImageUrl).slice(0,-4) + "_220x220_1.jpg";

  return (
    <div data-product-id={product.productId} className="product product_horizontal">
      <span className="product_code">Код: {product.code}</span>
      <div className="product_status_tooltip_container">
        <span className="product_status">{(product.hasAlternateUnit === true) ? 'Наличие' : 'Отсутствие'}</span>
      </div>
      <div className="product_photo">
        <a href="#" className="url--link product__link">
          <img src={srcName} />
        </a>
      </div>
      <div className="product_description">
        <a href="#" className="product__link">{product.title}</a>
      </div>
      <div className="product_tags hidden-sm">
        <p>Могут понадобиться:</p>
        <a href="#" className="url--link">{product.assocProducts}</a>
      </div>
      <div className="product_units">
        <div className="unit--wrapper">
          <div className="unit--select unit--active">
            <p className="ng-binding" onClick={(event) => switchClasses(event)}>За м. кв.</p>
          </div>
          <div className="unit--select">
            <p className="ng-binding" onClick={(event) => switchClasses(event)}>За упаковку</p>
          </div>
        </div>
      </div>
      <p className="product_price_club_card">
        <span className="product_price_club_card_text">По карте<br/>клуба</span>
        <span className="goldPrice">{product.priceGold} ₽</span>
        <span className="rouble__i black__i">
              <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                   width="30px" height="22px" viewBox="0 0 50 50"
                   enable-background="new 0 0 50 50" xml:space="preserve">
                 <use xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#rouble_black"></use>
              </svg>
           </span>
      </p>
      <p className="product_price_default">
        <span className="retailPrice">{product.priceRetail} ₽</span>
        <span className="rouble__i black__i">
              <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                   width="30px" height="22px" viewBox="0 0 50 50"
                   enable-background="new 0 0 50 50" xml:space="preserve">
                 <use xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#rouble_gray"></use>
              </svg>
           </span>
      </p>
      <div className="product_price_points">
        <p className="ng-binding">Можно купить за {product.bonusAmount} балла</p>
      </div>
      <div className="list--unit-padd"></div>
      <div className="list--unit-desc">
        <div className="unit--info">
          <div className="unit--desc-i"></div>
          <div className="unit--desc-t">
            <p>
              <span className="ng-binding">Продается упаковками:</span>
              <span className="unit--infoInn">{product.unitRatio} {product.unit} = {product.unitRatioAlt} {product.unitAlt} </span>
            </p>
          </div>
        </div>
      </div>
      <div className="product__wrapper">
        <div className="product_count_wrapper">
          <div className="stepper">
            <input className="product__count stepper-input" type="text" value="1"/>
              <span className="stepper-arrow up" onClick={(event) => {
                changeQuantity(event);
              }}>
              </span>
              <span className="stepper-arrow down" onClick={(event) => {
                changeQuantity(event);
              }}>
            </span>
          </div>
        </div>
        <button className="btn btn_cart" data-url="/cart/" data-product-id={product.productId}>
          <svg className="ic ic_cart">
             <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
          </svg>
          <span className="ng-binding">В корзину</span>
        </button>
      </div>
    </div>
  );
};

export default ProductListView;