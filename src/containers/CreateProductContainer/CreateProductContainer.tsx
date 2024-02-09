import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductFormValues, ProductType } from '../../Types/types';
import CreateProductComponent from '../../components/CreateProductComponent/CreateProductComponent';
import { useAppDispatch, useAppSelector } from '../../hook';
import {
  createProductAction,
  editProductAction,
  getProductAction,
  getProductByIdAction,
} from '../../store/product/actions';
import { useReducer } from 'react';
import _ from 'lodash';
import { isValidImage } from '../../utils/utils';
import { formReducer, initialValues } from '../../utils/useReducer';
import { setIsGetProduct } from '../../store/isGetProduct/slice';

const CreateProductContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { product, isLoad, error } = useAppSelector((state) => state.productReducer);
  const { isGetProduct } = useAppSelector((state) => state.isGetProductReducer);
  const token = localStorage.getItem('token');

  const { productId } = useParams();
  const [image, setImage] = useState<string>('');
  const [values, valuesDispatch] = useReducer(formReducer, initialValues);

  const setValues = (values: ProductType) => {
    valuesDispatch({
      type: 'SET_VALUES',
      payload: values,
    });
  };

  useEffect(() => {
    if (productId) {
      dispatch(getProductByIdAction(productId));
    }
    if (token && isGetProduct) {
      dispatch(getProductAction());
      dispatch(setIsGetProduct(false));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (productId && product) {
      setValues({
        ...product,
        price: `${parseInt(product.price)}`,
      });
      if (product.image) setImage(product.image);
    }
  }, [product, productId]);

  const onSubmit = (data: ProductFormValues) => {
    const newProduct = {
      ...data,
      price: `${data.price}.00`,
      image,
    };
    if (_.isEqual(newProduct, product) && productId) {
      alert('Вы ничего не изменили');
    } else if (productId) {
      dispatch(editProductAction({ navigate, ...newProduct, id: productId }));
    } else {
      dispatch(createProductAction({ navigate, ...newProduct }));
    }
  };

  const onImage = () => {
    const img = prompt('Вставьте ссылку на фотографию');
    if (img && isValidImage(img)) {
      setImage(img);
    } else {
      setImage('');
    }
  };

  return (
    <CreateProductComponent
      onSubmit={onSubmit}
      onImage={onImage}
      image={image}
      values={values}
      isLoad={isLoad}
      error={error}
    />
  );
};

export default CreateProductContainer;
