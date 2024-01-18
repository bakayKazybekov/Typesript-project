import React from 'react';
import { ShopCartProductType } from '../../Types/types';
import styles from './ShopCart.module.scss';

export type ShopCartComponentProps = {
  products: ShopCartProductType[];
  onDelete: (id: number) => void;
  onClear: () => void;
};

const ShopCartComponent: React.FC<ShopCartComponentProps> = ({ products, onDelete, onClear }) => {
  if (!products.length) return <div className={styles.wrapper}>Корзина пуста!</div>;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.shop_cart_title}>Корзина</div>
        <button className={styles.clear_button} onClick={onClear}>
          Очистить корзину
        </button>
      </header>
      <ul className={styles.products}>
        {products.map((product) => {
          const { title, price, image, uniqueId } = product;
          return (
            <li className={styles.product} key={uniqueId}>
              <div className={styles.product_image}>
                <img src={image} alt={title} />
              </div>
              <div className={styles.product_text}>{title}</div>
              <div className={styles.product_text}>{price} тыс.</div>
              <button className={styles.delete_button} onClick={() => onDelete(uniqueId)}>
                Удалить из карзины
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopCartComponent;
