import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Spin } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_ROUTER } from '../../consts/paths';
import { ProductType } from '../../Types/types';
import styles from './ProductDescription.module.scss';

type ProductDescriptionProps = {
  product: ProductType;
  isLoad: boolean;
  error?: string;
};

const ProductDescriptionComponent: React.FC<ProductDescriptionProps> = ({ product, isLoad, error }) => {
  if (isLoad) {
    return (
      <div className={styles.wrapper}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.wrapper}>
        <Alert type="error" message={error} />
      </div>
    );
  }

  const { title, image, description } = product;
  return (
    <div className={styles.container}>
      <div className={styles.back_button_container}>
        <Link className={styles.back_button} to={BASE_ROUTER}>
          Вернуться
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.description_title}>{title}</div>
        <div className={styles.content}>
          <div className={styles.description_image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.description_text}>
            <div className={styles.description_text_title}>Описание:</div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionComponent;
