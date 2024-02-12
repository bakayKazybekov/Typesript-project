import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EDIT_PRODUCT, PRODUCT_DESCRIPTION } from '../../../consts/paths';
import { ProductType } from '../../../Types/types';
import { ProductsListProps } from '../types';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import ShopCartAlert from '../../Alerts/ShopCartAlert/ShopCartAlert';
import ProductSkeleton from '../../Alerts/ProductSkeleton/ProductSkeleton';
import './ProductList.scss';
import '../../../icons/fontIcons.css';
import { setIsGetProduct } from '../../../store/isGetProduct/slice';
import { useAppDispatch } from '../../../hook';
import _ from 'lodash';

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  handleProductAction,
  deleteProduct,
  setDeleteProduct,
  confirmIsOpen,
  setConfirmIsOpen,
  shopCartAlert,
  token,
  isLoad,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (isLoad) {
    return (
      <div className="product-list_wrapper">
        <ProductSkeleton productsLength={products.length} />
      </div>
    );
  }
  if (!token) {
    return (
      <div className="product-list_wrapper">
        <div>Авторизуйтесь!</div>
      </div>
    );
  }
  if (typeof products === 'string') {
    return (
      <div className="product-list_wrapper">
        <div>{products}</div>
      </div>
    );
  }
  if (!products.length) {
    return (
      <div className="product-list_wrapper">
        <div>У вас нет товаров!</div>
      </div>
    );
  }

  return (
    <div className="product-list_wrapper">
      <ul className="product-list">
        {Array.isArray(products) &&
          _.map(products, (product: ProductType) => {
            const { title, price, image, id } = product;
            return (
              <li className="product-list_product" key={id}>
                <div
                  className="product_image"
                  onClick={() => {
                    navigate(`${PRODUCT_DESCRIPTION}/${id}`);
                    dispatch(setIsGetProduct(false));
                  }}
                >
                  <img src={image} alt={title} />
                </div>
                <div
                  className="icon-trash"
                  onClick={() => {
                    setConfirmIsOpen(true);
                    setDeleteProduct({ title, id });
                  }}
                ></div>
                <div className="product_text">{title}</div>
                <div className="product_text">{parseInt(price)} $</div>
                <div
                  className="product_edit-button"
                  onClick={() => {
                    navigate(`${EDIT_PRODUCT}/${id}`);
                    dispatch(setIsGetProduct(false));
                  }}
                >
                  <div className="icon-pencil"></div>
                  Редактировать
                </div>
                <div className="add_cart_button" onClick={() => handleProductAction('addCart', product)}>
                  <div className="icon-cart"></div>
                  Добавить в корзину
                </div>
                <ShopCartAlert shopCartAlert={shopCartAlert} />
              </li>
            );
          })}
        <DeleteConfirm
          confirmFunction={() => handleProductAction('delete')}
          onClose={() => setConfirmIsOpen(false)}
          isOpen={confirmIsOpen}
          text="Вы уверены что хотите удалить данный товар?"
          productTitle={deleteProduct.title}
        />
      </ul>
    </div>
  );
};

export default ProductsList;
