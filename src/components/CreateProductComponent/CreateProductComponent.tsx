import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, CircularProgress } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BASE_ROUTER } from '../../consts/paths';
import { ProductFormValues } from '../../Types/types';
import { createProductScheme } from '../../utils/scheme';
import styles from './CreateProduct.module.scss';

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
      <div className={styles.wrapper}>
        <div className="loading">
          <CircularProgress />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.wrapper}>
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.back_button} onClick={() => navigate(BASE_ROUTER)}>
        Отмена
      </button>
      <div className={styles.container}>
        <form className={styles.create_product_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.content}>
            <div className={styles.add_image} onClick={onImage}>
              {!image ? <h4>Добавить фотографию</h4> : <img src={image} alt="Картинка товара" />}
            </div>
            <div className={styles.fields}>
              {/* {createFields.map((field) => {
                return (
                  <label className={styles.form_label} key={field.key}>
                    <input className={styles.fields_input} placeholder={field.placeholder} {...register(field.key)}/>
                    <span className={styles.form_label_error}>{errors?.field.key?.message}</span>
                  </label>
                )
              })} */}
              <label className={styles.form_label}>
                <input className={styles.fields_input} placeholder="Введите название товара" {...register('title')} />
                <span className={styles.form_label_error}>{errors?.title?.message}</span>
              </label>
              <label className={styles.form_label}>
                <input
                  className={styles.fields_input}
                  placeholder="Введите описание товара"
                  {...register('description')}
                />
                <span className={styles.form_label_error}>{errors?.description?.message}</span>
              </label>
              <label className={styles.form_label}>
                <input
                  className={styles.fields_input}
                  type="number"
                  placeholder="Введите цену товара"
                  {...register('price')}
                />
                <span className={styles.form_label_error}>{errors?.price?.message}</span>
              </label>
            </div>
          </div>
          <button className={styles.save_button}>Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductComponent;
