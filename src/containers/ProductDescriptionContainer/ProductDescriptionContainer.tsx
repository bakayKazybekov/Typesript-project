import ProductDescriptionComponent from '../../components/ProductDescriptionComponent/ProductDescriptionComponent';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByIdAction } from '../../store/product/actions';
import { useAppDispatch, useAppSelector } from '../../hook';
import _ from 'lodash';
import { useState } from 'react';
import { ProductType } from '../../Types/types';

const ProductDescriptionContainer = () => {
  const dispatch = useAppDispatch();
  const { productDescId } = useParams<string>();

  useEffect(() => {
    if (productDescId) {
      dispatch(getProductByIdAction(productDescId));
    }
  }, [dispatch, productDescId]);
  const { product, isLoad, error } = useAppSelector((state) => state.productReducer);

  return <ProductDescriptionComponent product={product} isLoad={isLoad} error={error} />;
};

export default ProductDescriptionContainer;
