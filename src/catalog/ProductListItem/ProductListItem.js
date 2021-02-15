import React, { useState } from 'react';
import { connect } from 'react-redux';
import ImgResize from '@/core/imgResize/imgResize';
import { actionAddGood } from '@/store';

const BY_ITEM = 'BY_ITEM';
const BY_PACK = 'BY_PACK';

const ProductListItem = ({ product, addGood, countInCart }) => {

  const [quantity, changeQuantity] = useState(1);
  const [unit, changeUnit] = useState(BY_ITEM);

  const assocProducts =  (product.assocProducts).slice(0,-1) + ".";
  const classNameForPack = `unit--select ${(unit === BY_PACK) && 'unit--active'}`;
  const classNameForItem = `unit--select ${(unit === BY_ITEM) && 'unit--active'}`;
  const retailPrice = (unit === BY_PACK) ? product.priceRetail : product.priceRetailAlt;
  const goldPrice = (unit === BY_PACK) ? product.priceGold : product.priceGoldAlt;

  return (
    <div data-product-id={product.productId} className="product product_horizontal">
      <span className="product_code">Код: {product.code}</span>
      <div className="product_status_tooltip_container">
        <span className="product_status">{(product.hasAlternateUnit === true) ? 'Наличие' : 'Отсутствие'}</span>
      </div>
      <div className="product_photo">
        <a href="#" className="url--link product__link">
          {ImgResize(product.primaryImageUrl, '_220x220_1')}
        </a>
      </div>
      <div className="product_description">
        <a href="#" className="product__link">{product.title}</a>
      </div>
      <div className="product_tags hidden-sm">
        <p>Могут понадобиться:</p>
        <a href="#" className="url--link">{assocProducts}</a>
      </div>
      <div className="product_units">
        <div className="unit--wrapper">
          <div className={classNameForItem}>
            <p className="ng-binding" onClick={() => changeUnit(BY_ITEM)}>За м. кв.</p>
          </div>
          <div className={classNameForPack}>
            <p className="ng-binding" onClick={() => changeUnit(BY_PACK)}>За упаковку</p>
          </div>
        </div>
      </div>
      <p className="product_price_club_card">
        <span className="product_price_club_card_text">По карте<br/>клуба</span>
        <span className="goldPrice">{Math.round(goldPrice)} ₽</span>
        <span className="rouble__i black__i">
              <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                   width="30px" height="22px" viewBox="0 0 50 50"
                   enable-background="new 0 0 50 50" xml:space="preserve">
                 <use xmlns:xlink="http://www.w3.org/1999/xlink"
  xlink:href="#rouble_black"/>
              </svg>
           </span>
      </p>
      <p className="product_price_default">
        <span className="retailPrice">{Math.round(retailPrice)} ₽</span>
        <span className="rouble__i black__i">
              <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                   width="30px" height="22px" viewBox="0 0 50 50"
                   enable-background="new 0 0 50 50" xml:space="preserve">
                 <use xmlns:xlink="http://www.w3.org/1999/xlink"
  xlink:href="#rouble_gray"/>
              </svg>
           </span>
      </p>
      <div className="product_price_points">
        <p className="ng-binding">Можно купить за {product.bonusAmount} балла</p>
      </div>
      <div className="list--unit-padd"/>
      <div className="list--unit-desc">
        <div className="unit--info">
          <div className="unit--desc-i"/>
          <div className="unit--desc-t">
            <p>
              <span className="ng-binding">Продается упаковками:</span>
              <span className="unit--infoInn">{product.unitRatio} {product.unit} = {product.unitRatioAlt.toFixed(2)} {product.unitAlt} </span>
            </p>
          </div>
        </div>
      </div>
      <div>В корзине: {countInCart || 0}</div>
      <div className="product__wrapper">
        <div className="product_count_wrapper">
          <div className="stepper">
            <input onChange = {(e) => changeQuantity(e.target.value)} className="product__count stepper-input" type="text" value={quantity}/>
              <span className="stepper-arrow up" onClick={() => changeQuantity(quantity + 1)}>
              </span>
              <span className="stepper-arrow down" onClick={() => (quantity > 0) ? changeQuantity(quantity - 1) : 0}>
            </span>
          </div>
        </div>
        <button onClick = {() => addGood(product.productId, quantity)} className="btn btn_cart" data-url="/cart/" data-product-id={product.productId}>
          <svg className="ic ic_cart">
             <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"/>
          </svg>
          <span className="ng-binding">В корзину</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, { product }) => ({
  countInCart: state && state.card[product.productId],
})

const mapDispatchToProps = dispatch => ({
  addGood: (id, quantity) => {
    dispatch(actionAddGood(id, quantity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);