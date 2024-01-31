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
  onDelete,
  setDeleteId,
  deleteProductTitle,
  setDeleteProductTitle,
  confirmModalIsOpen,
  setConfirmModalIsOpen,
  shopCartAlert,
  addCart,
  token,
  isLoad,
  error,
}) => {
  const navigate = useNavigate();

  return (
    <div className="product-list_wrapper">
      {isLoad ? (
        <ProductSkeleton productsLength={products.length} />
      ) : error ? (
        <Alert type="error" message={error} />
      ) : !token ? (
        <div>Авторизуйтесь!</div>
      ) : !products.length ? (
        <div>Ничего не найдено!</div>
      ) : (
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
                      setConfirmModalIsOpen(true);
                      setDeleteId(id);
                      setDeleteProductTitle(title);
                    }}
                  />
                </div>
                <DeleteConfirm
                  confirmFunction={onDelete}
                  onClose={() => setConfirmModalIsOpen(false)}
                  isOpen={confirmModalIsOpen}
                  text="Вы уверены что хотите удалить данный товар?"
                  productTitle={deleteProductTitle}
                />
                <div className="product_text">{title}</div>
                <div className="product_text">{+price - 0} k</div>
                <div className="product_edit-button" onClick={() => navigate(`${EDIT_PRODUCT}/${id}`)}>
                  <div className="button_icon">
                    <img src={editIcon} alt="" />
                  </div>
                  Редактировать
                </div>
                <div className="add_cart_button" onClick={() => addCart(product)}>
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
      )}
    </div>
  );
};

export default ProductsList;
