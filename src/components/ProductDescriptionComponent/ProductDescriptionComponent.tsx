import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Spin } from 'antd';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BASE_ROUTER } from '../../consts/paths';
import { ProductType } from '../../Types/types';
import './ProductDescription.scss';

type ProductDescriptionProps = {
  product: ProductType;
  isLoad: boolean;
  error?: string;
};

const Container: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="description_container">{children}</div>
);

const ProductDescriptionComponent: React.FC<ProductDescriptionProps> = ({ product, isLoad, error }) => {
  const { title, image, description } = product;

  if (isLoad) {
    return (
      <Container>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Container>
    );
  }
  if (!!error?.length) {
    return (
      <Container>
        <Alert type="error" message={error} />
      </Container>
    );
  }

  return (
    <Container>
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
    </Container>
  );
};

export default ProductDescriptionComponent;
