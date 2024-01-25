import { Alert, CircularProgress } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DELETE_CONFIRM, EDIT_PRODUCT, PRODUCT_DESCRIPTION } from '../../../consts/paths';
import { deleteIcon } from '../../../images';
import { ProductType } from '../../../Types/types';
import { ProductsListProps } from '../types';
import styles from './ProductList.module.scss';
import ShopCartAlert from './ShopCartAlert/ShopCartAlert';

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  addCart,
  shopCartAlert,
  onClickShopCartButton,
  token,
  isLoad,
  error,
}) => {
  const navigate = useNavigate();

  switch (true) {
    case isLoad:
      return (
        <div className={styles.wrapper}>
          <div className={styles.loading}>
            <CircularProgress />
          </div>
        </div>
      );
    case !!error:
      return (
        <div className={styles.wrapper}>
          <Alert severity="error">{error}</Alert>
        </div>
      );
    case !token:
      return (
        <div className={styles.wrapper}>
          <div>Авторизуйтесь!</div>
        </div>
      );
    case !products.length:
      return (
        <div className={styles.wrapper}>
          <div>Ничего не найдено!</div>
        </div>
      );
  }

  // if (isLoad) {
  //   return (
  //     <div className={styles.wrapper}>
  //       <div className={styles.loading}>
  //         <CircularProgress />
  //       </div>
  //     </div>
  //   );
  // }
  // if (error) {
  //   return (
  //     <div className={styles.wrapper}>
  //       <Alert severity="error">{error}</Alert>
  //     </div>
  //   );
  // }
  // if (!products.length) {
  //   return (
  //     <div className={styles.wrapper}>
  //       <div>Ничего не найдено!</div>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.wrapper}>
      <div className={styles.products}>
        {products.map((product: ProductType) => {
          const { title, price, image, id } = product;
          return (
            <li className={styles.product} key={id}>
              <div className={styles.product_image} onClick={() => navigate(`${PRODUCT_DESCRIPTION}/${id}`)}>
                <img src={image} alt={title} />
              </div>
              <div className={styles.delete_button}>
                <img src={deleteIcon} alt="Кнопка удаления" onClick={() => navigate(DELETE_CONFIRM + `/${id}`)} />
              </div>
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
    </div>
  );
};

export default ProductsList;
