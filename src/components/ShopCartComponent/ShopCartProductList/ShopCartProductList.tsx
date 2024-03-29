import { Alert } from 'antd';
import _ from 'lodash';
import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import ProductSkeleton from '../../Alerts/ProductSkeleton/ProductSkeleton';
import '../ShopCart.scss';
import { ShopCartProductListProps } from '../types';

const ShopCartProductList: React.FC<ShopCartProductListProps> = ({
  shopCartProducts,
  addCart,
  deleteFromCart,
  deleteProduct,
  setDeleteProduct,
  confirmIsOpen,
  setConfirmIsOpen,
  isLoad,
}) => {
  if (isLoad) {
    return <ProductSkeleton productsLength={shopCartProducts.length} />;
  }
  return (
    <ul className="shop-cart__product-list">
      {_.map(shopCartProducts, (shopCart) => {
        const { product, quantity } = shopCart;
        const { title, price, image, id } = product;
        return (
          <li className="shop-cart__product" key={id}>
            <div className="product__image">
              <img src={image} alt={title} />
            </div>
            <div className="product__text">{title}</div>
            <div className="product__text">{+price * quantity} $</div>
            <div className="quantity__action">
              <button className="quantity__button">-</button>
              <div className="product__text">{quantity}</div>
              <button className="quantity__button" onClick={() => addCart(shopCart)}>
                +
              </button>
            </div>
            <div
              className="shop-cart__delete-button"
              onClick={() => {
                setConfirmIsOpen(true);
                setDeleteProduct({ title, id });
              }}
            >
              Удалить из корзины
            </div>
          </li>
        );
      })}
      <DeleteConfirm
        confirmFunction={deleteFromCart}
        onClose={() => setConfirmIsOpen(false)}
        isOpen={confirmIsOpen}
        text="Вы уверены что хотите удалить данный товар из корзины?"
        productTitle={deleteProduct.title}
      />
    </ul>
  );
};

export default ShopCartProductList;
