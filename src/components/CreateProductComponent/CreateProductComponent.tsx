import { LoadingOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Spin } from 'antd';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BASE_ROUTER, CREATE_PRODUCT } from '../../consts/paths';
import { ProductFormValues } from '../../Types/types';
import { createProductFields } from '../../utils/utils';
import { createProductScheme } from '../../utils/scheme';
import './CreateProduct.scss';
import { useAppDispatch } from '../../hook';
import { setIsGetProduct } from '../../store/isGetProduct/slice';

type CreateProductProps = {
  onSubmit: SubmitHandler<ProductFormValues>;
  onImage: () => void;
  image?: string;
  values?: ProductFormValues;
  isLoad: boolean;
  error?: string;
};

const CreateProductComponent: React.FC<CreateProductProps> = ({ onSubmit, onImage, image, values, isLoad, error }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: yupResolver(createProductScheme),
    values,
  });

  if (isLoad) {
    return (
      <div className="create-product__wrapper">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }
  // if (error) {
  //   return <div className="create-product__wrapper"></div>;
  // }

  return (
    <div className="create-product__wrapper">
      <button
        className="create-product__back"
        onClick={() => {
          navigate(BASE_ROUTER);
          dispatch(setIsGetProduct(false));
        }}
      >
        Отмена
      </button>
      <div className="create-product__container">
        <form autoComplete="off" className="create-product__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="create-product__content">
            <div className="create-product__add-image" onClick={onImage}>
              {!image ? <h4>Добавить фотографию</h4> : <img src={image} alt="Картинка товара" />}
            </div>
            <div className="create-product__fields">
              {createProductFields.map(({ name, placeholder, type }) => (
                <label className="create-product__label" key={name}>
                  <input type={type} className="create-product__field" placeholder={placeholder} {...register(name)} />
                  <span className="create-product__error">{errors[name]?.message}</span>
                </label>
              ))}
              {error && <Alert type="error" message={error} closable />}
            </div>
          </div>
          <button className="create-product__save">Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductComponent;
