import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Spin } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_ROUTER } from '../../consts/paths';
import { ProductType } from '../../Types/types';
import './ProductDescription.scss';

type ProductDescriptionProps = {
  product: ProductType;
  isLoad: boolean;
  error?: string;
};

const ProductDescriptionComponent: React.FC<ProductDescriptionProps> = ({ product, isLoad, error }) => {
  const { title, image, description } = product;

  return (
    <div className="description_container">
      {isLoad ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      ) : error ? (
        <Alert type="error" message={error} />
      ) : (
        <>
          <div className="description_back-button_container">
            <Link className="description_back-button" to={BASE_ROUTER}>
              Вернуться
            </Link>
          </div>
          <div className="description_wrapper">
            <div className="description_product-name">{title}</div>
            <div className="description_content">
              <div className="description_image">
                <img src={image} alt={title} />
              </div>
              <div className="description_text">
                <div className="description_text-title">Описание:</div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDescriptionComponent;
