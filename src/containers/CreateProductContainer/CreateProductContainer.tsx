import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductFormValues } from '../../Types/types';
import CreateProductComponent from '../../components/CreateProductComponent/CreateProductComponent';
import { useAppDispatch, useAppSelector } from '../../hook';
import { createProductAction, editProductAction, getProductByIdAction } from '../../store/product/actions';

const initialValues: ProductFormValues = {
  title: '',
  description: '',
  price: '',
};

const CreateProductContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { product, isLoad, error } = useAppSelector((state) => state.productReducer);
  const { productId } = useParams();
  const [values, setValues] = useState(initialValues);
  const [image, setImage] = useState<string>();

  useEffect(() => {
    if (productId) {
      dispatch(getProductByIdAction(productId));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (productId && product) {
      setValues({
        ...product,
        price: `${+product.price - 0}`,
      });
      setImage(product.image);
    }
  }, [product, productId]);

  const onSubmit = (data: ProductFormValues) => {
    if (productId) {
      const obj = {
        ...data,
        image,
        id: productId,
      };
      dispatch(editProductAction({ navigate, ...obj }));
    } else {
      const obj = {
        ...data,
        image,
      };
      dispatch(createProductAction({ navigate, ...obj }));
    }
  };

  const onImage = () => {
    const img = prompt('Вставьте ссылку на фотографию');
    if (img) {
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
