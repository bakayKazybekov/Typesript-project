import 'react-loading-skeleton/dist/skeleton.css';
import { Alert, Spin } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EDIT_PRODUCT, PRODUCT_DESCRIPTION } from '../../../consts/paths';
import { deleteIcon } from '../../../images';
import { ProductType } from '../../../Types/types';
import { ProductsListProps } from '../types';
import DeleteConfirm from './DeleteConfirm/DeleteConfirm';
import styles from './ProductList.module.scss';
import ShopCartAlert from './ShopCartAlert/ShopCartAlert';

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  onDelete,
  setDeleteId,
  confirmModalIsOpen,
  setConfirmModalIsOpen,
  shopCartAlert,
  onClickShopCartButton,
  token,
  isLoad,
  error,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {isLoad ? (
        <Spin />
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
                  onDeleteConfirm={onDelete}
                  onClose={() => setConfirmModalIsOpen(false)}
                  isOpen={confirmModalIsOpen}
                />
                <div className={styles.product_text}>{title}</div>
                <div className={styles.product_text}>{+price - 0} тыс.</div>
                <div className={styles.edit_button} onClick={() => navigate(`${EDIT_PRODUCT}/${id}`)}>
                  Редактировать
                </div>
                <div className={styles.add_cart_button} onClick={() => onClickShopCartButton(product)}>
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
