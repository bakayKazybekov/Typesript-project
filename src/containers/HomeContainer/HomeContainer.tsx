import { deleteProductAction, getProductAction } from '../../store/product/actions';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import { ProductType, ShopCartProductType } from '../../Types/types';
import { useAppDispatch, useAppSelector } from '../../hook';
import _ from 'lodash';
import { addShopCartProductsAction } from '../../store/shopCart/actions';

function HomeContainer() {
  const dispatch = useAppDispatch();

  const [searchProducts, setSearchProducts] = useState<string>('');
  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [sortingOpertator, setSortingOperator] = useState('');
  const [priceSortingState, setPriceSortingState] = useState<boolean>(false);
  const [dateSortingState, setDateSortingState] = useState<boolean>(false);

  const [shopCartAlert, setShopCartAlert] = useState<boolean>(false);

  const [deleteId, setDeleteId] = useState<number>(0);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);

  const { products, isLoad, error } = useAppSelector((state) => state.productReducer);

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) dispatch(getProductAction());
  }, [dispatch, token]);

  const onDelete = useCallback(() => {
    if (deleteId) {
      dispatch(deleteProductAction(deleteId))
        .then(() => dispatch(getProductAction()))
        .catch(() => dispatch(getProductAction()));
    }
  }, [dispatch, deleteId]);

  const addCart = (product: ProductType) => {
    dispatch(addShopCartProductsAction({ product: product.id, quantity: 0 }));
    setShopCartAlert(true);
    setTimeout(() => {
      setShopCartAlert(false);
    }, 500);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchProducts) {
      return _.filter(filtered, (product) =>
        _.includes(product.title.toLowerCase(), searchProducts.toLowerCase().trim()),
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
    if (e.target.value.length) {
      setShowResetButton(true);
    } else {
      setSearchProducts(e.target.value);
      setShowResetButton(false);
    }
  };

  const onSubmitSearch = (data: { search: string }) => {
    setSearchProducts(data.search);
    if (!data.search) setShowResetButton(false);
  };

  const onResetSearch = () => {
    setSearchProducts('');
    setShowResetButton(false);
  };

  const filters = (operator: string) => {
    setSortingOperator(operator);
    if (operator === 'firstCheap' || operator === 'firstExpensive') {
      setPriceSortingState(!priceSortingState);
      setDateSortingState(false);
    } else if (operator === 'firstNew' || operator === 'firstOld') {
      setDateSortingState(!dateSortingState);
      setPriceSortingState(false);
    } else if (operator === 'withoutFilter') {
      setPriceSortingState(false);
      setDateSortingState(false);
    }
  };

  return (
    <HomeComponent
      onSubmitSearch={onSubmitSearch}
      onChangeSearch={onChangeSearch}
      filters={filters}
      onResetSearch={onResetSearch}
      showResetButton={showResetButton}
      priceSortingState={priceSortingState}
      dateSortingState={dateSortingState}
      products={filteredProducts}
      onDelete={onDelete}
      setDeleteId={setDeleteId}
      confirmModalIsOpen={confirmModalIsOpen}
      setConfirmModalIsOpen={setConfirmModalIsOpen}
      shopCartAlert={shopCartAlert}
      addCart={addCart}
      token={token}
    />
  );
}

export default HomeContainer;
