import 'react-loading-skeleton/dist/skeleton.css';
import { Alert } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EDIT_PRODUCT, PRODUCT_DESCRIPTION } from '../../../consts/paths';
import { deleteIcon } from '../../../images';
import { ProductType } from '../../../Types/types';
import { ProductsListProps } from '../types';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import styles from './ProductList.module.scss';
import ShopCartAlert from '../../Alerts/ShopCartAlert/ShopCartAlert';
import ProductSkeleton from '../../Alerts/ProductSkeleton/ProductSkeleton';
import { useAppSelector } from '../../../hook';

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  onDelete,
  setDeleteId,
  confirmModalIsOpen,
  setConfirmModalIsOpen,
  shopCartAlert,
  addCart,
  token,
}) => {
  // console.log('productsList Render');

  const navigate = useNavigate();
  const { isLoad, error } = useAppSelector((state) => state.productReducer);

  return (
    <div className={styles.wrapper}>
      {isLoad ? (
        <ProductSkeleton productsLength={products.length} />
      ) : error ? (
        <Alert type="error" message={error} />
      ) : !token ? (
        <div>Авторизуйтесь!</div>
      ) : !products.length ? (
        <div>Ничего не найдено!</div>
      ) : (
        <div className={styles.products}>
          {products.map((product: ProductType) => {
            const { title, price, image, id } = product;
            return (
              <li className={styles.product} key={id}>
                <div className={styles.product_image} onClick={() => navigate(`${PRODUCT_DESCRIPTION}/${id}`)}>
                  <img src={image} alt={title} />
                </div>
                <div className={styles.delete_button}>
                  <img
                    src={deleteIcon}
                    alt="Кнопка удаления"
                    onClick={() => {
                      setConfirmModalIsOpen(true);
                      setDeleteId(id);
                    }}
                  />
                </div>
                <DeleteConfirm
                  confirmFunction={onDelete}
                  onClose={() => setConfirmModalIsOpen(false)}
                  isOpen={confirmModalIsOpen}
                  text="Вы уверены что хотите удалить данный товар?"
                />
                <div className={styles.product_text}>{title}</div>
                <div className={styles.product_text}>{+price - 0} k</div>
                <div className={styles.edit_button} onClick={() => navigate(`${EDIT_PRODUCT}/${id}`)}>
                  Редактировать
                </div>
                <div className={styles.add_cart_button} onClick={() => addCart(product)}>
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
