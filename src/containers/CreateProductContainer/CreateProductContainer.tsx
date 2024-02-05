import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductFormValues, ProductType } from '../../Types/types';
import CreateProductComponent from '../../components/CreateProductComponent/CreateProductComponent';
import { useAppDispatch, useAppSelector } from '../../hook';
import { createProductAction, editProductAction, getProductByIdAction } from '../../store/product/actions';
import { useReducer } from 'react';
import _ from 'lodash';
import { isValidUrl } from '../../utils/utils';
import { formReducer, initialValues } from '../../utils/useReducer';

const CreateProductContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { product, isLoad, error } = useAppSelector((state) => state.productReducer);

  const { productId } = useParams();
  const [image, setImage] = useState<string>();
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
  }, [dispatch, productId]);

  useEffect(() => {
    if (productId && product) {
      console.log('product', product);
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
    if (_.isEqual(newProduct, product)) {
      alert('Вы ничего не изменили');
    } else if (productId) {
      dispatch(editProductAction({ navigate, ...newProduct, id: productId }));
    } else {
      dispatch(createProductAction({ navigate, ...newProduct }));
    }
  };

  const onImage = () => {
    const img = prompt('Вставьте ссылку на фотографию');
    if (img && isValidUrl(img)) {
      setImage(img);
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
