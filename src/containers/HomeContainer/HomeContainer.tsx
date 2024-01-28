import { deleteProductAction, getProductAction } from '../../store/product/actions';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import { ProductType, ShopCartProductType } from '../../Types/types';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setInAccount } from '../../store/login/slice';
import _ from 'lodash';
import { addShopCartProductsAction } from '../../store/shopCart/actions';

function HomeContainer() {
  const dispatch = useAppDispatch();

  const [searchProducts, setSearchProducts] = useState<string>('');
  const [sortingOpertator, setSortingOperator] = useState('');

  const [shopCartAlert, setShopCartAlert] = useState<boolean>(false);

  const [deleteId, setDeleteId] = useState<number>(0);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);

  const { products, isLoad, error } = useAppSelector((state) => state.productReducer);
  const { inAccount } = useAppSelector((state) => state.loginReducer);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(setInAccount(true));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (inAccount) dispatch(getProductAction());
  }, [dispatch, inAccount]);

  const onDelete = useCallback(() => {
    if (deleteId) {
      dispatch(deleteProductAction(deleteId))
        .then(() => dispatch(getProductAction()))
        .catch(() => dispatch(getProductAction()));
    }
  }, [dispatch, deleteId]);

  const addCart = (product: ProductType) => {
    dispatch(addShopCartProductsAction({ product: product.id, quantity: 1 }));
    setShopCartAlert(true);
    setTimeout(() => {
      setShopCartAlert(false);
    }, 500);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchProducts) {
      return _.filter(filtered, (product) =>
        _.startsWith(product.title.toLowerCase(), searchProducts.toLowerCase().trim()),
      );
    }

    return filtered.sort((a: ProductType, b: ProductType): number => {
      switch (sortingOpertator) {
        case 'firstCheap':
          return +a.price - +b.price;
        case 'firstExpensive':
          return +b.price - +a.price;
        case 'firstNew':
          return +a.id - +b.id;
        case 'firstOld':
          return +b.id - +a.id;
        default:
          return 0;
      }
    });
  }, [products, searchProducts, sortingOpertator]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.length) {
      setSearchProducts(e.target.value);
    }
  };

  const onSubmitSearch = (data: { search: string }) => {
    setSearchProducts(data.search);
  };

  const filters = (operator: string) => {
    setSortingOperator(operator);
  };

  return (
    <HomeComponent
      onSubmitSearch={onSubmitSearch}
      onChangeSearch={onChangeSearch}
      filters={filters}
      products={filteredProducts}
      onDelete={onDelete}
      setDeleteId={setDeleteId}
      confirmModalIsOpen={confirmModalIsOpen}
      setConfirmModalIsOpen={setConfirmModalIsOpen}
      shopCartAlert={shopCartAlert}
      addCart={addCart}
      token={token}
      isLoad={isLoad}
      error={error}
    />
  );
}

export default HomeContainer;
