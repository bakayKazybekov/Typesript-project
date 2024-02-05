import 'react-loading-skeleton/dist/skeleton.css';
import { Alert } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EDIT_PRODUCT, PRODUCT_DESCRIPTION } from '../../../consts/paths';
import { deleteIcon, editIcon, shopCartIcon } from '../../../images';
import { ProductType } from '../../../Types/types';
import { ProductsListProps } from '../types';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import ShopCartAlert from '../../Alerts/ShopCartAlert/ShopCartAlert';
import ProductSkeleton from '../../Alerts/ProductSkeleton/ProductSkeleton';
import './ProductList.scss';

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
  error,
}) => {
  const navigate = useNavigate();
  if (isLoad) {
    return (
      <div className="product-list_wrapper">
        <ProductSkeleton productsLength={products.length} />
      </div>
    );
  }
  if (!!error) {
    return (
      <div className="product-list_wrapper">
        <Alert type="error" message={error} />
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
  if (!products.length) {
    return (
      <div className="product-list_wrapper">
        <div>Ничего не найдено!</div>
      </div>
    );
  }

  return (
    <div className="product-list_wrapper">
      <div className="product-list">
        {products.map((product: ProductType) => {
          const { title, price, image, id } = product;
          return (
            <li className="product-list_product" key={id}>
              <div className="product_image" onClick={() => navigate(`${PRODUCT_DESCRIPTION}/${id}`)}>
                <img src={image} alt={title} />
              </div>
              <div className="product_delete-button">
                <img
                  src={deleteIcon}
                  alt="Кнопка удаления"
                  onClick={() => {
                    setConfirmIsOpen(true);
                    setDeleteProduct({ title, id });
                  }}
                />
              </div>
              <DeleteConfirm
                confirmFunction={() => handleProductAction('delete')}
                onClose={() => setConfirmIsOpen(false)}
                isOpen={confirmIsOpen}
                text="Вы уверены что хотите удалить данный товар?"
                productTitle={deleteProduct.title}
              />
              <div className="product_text">{title}</div>
              <div className="product_text">{parseInt(price)} k</div>
              <div className="product_edit-button" onClick={() => navigate(`${EDIT_PRODUCT}/${id}`)}>
                <div className="button_icon">
                  <img src={editIcon} alt="" />
                </div>
                Редактировать
              </div>
              <div className="add_cart_button" onClick={() => handleProductAction('addCart', product)}>
                <div className="button_icon">
                  <img src={shopCartIcon} alt="" />
                </div>
                Добавить в корзину
              </div>
              <ShopCartAlert shopCartAlert={shopCartAlert} />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
