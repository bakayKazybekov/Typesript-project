import { deleteProductAction, getProductAction } from '../../store/product/actions';
import { ChangeEvent, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import { ProductType } from '../../Types/types';
import { useAppDispatch, useAppSelector } from '../../hook';
import _ from 'lodash';
import { addShopCartProductsAction } from '../../store/shopCart/actions';
import { clearProductsError } from '../../store/product/slice';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { BASE_ROUTER, CREATE_PRODUCT } from '../../consts/paths';

function HomeContainer() {
  const dispatch = useAppDispatch();
  const { products, isLoad, error } = useAppSelector((state) => state.productReducer);
  const token = localStorage.getItem('token');
  const isFirstRender = useRef(true);
  const history = createBrowserHistory();
  console.log('history', history);

  // Filter states
  const [searchProducts, setSearchProducts] = useState<string>('');
  const [sortingOpertator, setSortingOperator] = useState<string>('');
  const [priceSortingState, setPriceSortingState] = useState<boolean>(false);
  const [dateSortingState, setDateSortingState] = useState<boolean>(false);
  // Shop cart states
  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [shopCartAlert, setShopCartAlert] = useState<boolean>(false);
  // Delete Confirm Modal states
  const [deleteProduct, setDeleteProduct] = useState<{ title: string; id: number }>({ title: '', id: 0 });
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      dispatch(getProductAction());
      console.log('get-request');
    }
  }, [dispatch, token]);

  // useEffect(() => {
  //   const handleUnload = () => {
  //     isFirstRender.current = true;
  //   };
  //   window.addEventListener('unload', handleUnload);
  //   return () => {
  //     window.removeEventListener('unload', handleUnload);
  //   };
  // }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchProducts) {
      const searchedProducts = _.filter(filtered, (product) =>
        _.includes(product.title.toLowerCase(), searchProducts.toLowerCase().trim()),
      );
      if (!searchedProducts.length) {
        return 'Ничего не найдено!';
      } else {
        return searchedProducts;
      }
    }
    return filtered.sort((a: ProductType, b: ProductType): number => {
      const priceA = parseInt(a.price);
      const priceB = parseInt(b.price);
      const dateA = Math.round(a.id);
      const dateB = Math.round(b.id);
      switch (sortingOpertator) {
        case 'firstCheap':
          return priceA - priceB;
        case 'firstExpensive':
          return priceB - priceA;
        case 'firstNew':
          return dateA - dateB;
        case 'firstOld':
          return dateB - dateA;
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

  const onDelete = useCallback(() => {
    if (deleteProduct.id) {
      dispatch(deleteProductAction(deleteProduct.id));
    }
  }, [dispatch, deleteProduct]);

  const addCart = (product: ProductType) => {
    dispatch(addShopCartProductsAction({ product: product.id, quantity: 0 }));
    setShopCartAlert(true);
    _.debounce(() => setShopCartAlert(false), 500)();
  };

  const onResetSearch = () => {
    setSearchProducts('');
    setShowResetButton(false);
  };

  const filters = (operator: string) => {
    setSortingOperator(operator);
    switch (operator) {
      case 'firstExpensive':
      case 'firstCheap':
        setPriceSortingState(!priceSortingState);
        setDateSortingState(false);
        break;
      case 'firstOld':
      case 'firstNew':
        setDateSortingState(!dateSortingState);
        setPriceSortingState(false);
        break;
      default:
        setPriceSortingState(false);
        setDateSortingState(false);
        break;
    }
  };

  const onCloseError = () => {
    dispatch(clearProductsError());
  };

  const handleProductAction = (type: string, product?: ProductType, operator?: string) => {
    switch (type) {
      case 'delete':
        onDelete();
        break;
      case 'addCart':
        if (product) {
          addCart(product);
        }
        break;
      case 'resetSearch':
        onResetSearch();
        break;
      case 'filters':
        if (operator) filters(operator);
        break;
      case 'closeError':
        onCloseError();
        break;
      default:
        break;
    }
  };

  return (
    <HomeComponent
      handleProductAction={handleProductAction}
      onSubmitSearch={onSubmitSearch}
      onChangeSearch={onChangeSearch}
      showResetButton={showResetButton}
      priceSortingState={priceSortingState}
      dateSortingState={dateSortingState}
      products={filteredProducts}
      deleteProduct={deleteProduct}
      setDeleteProduct={setDeleteProduct}
      confirmIsOpen={confirmIsOpen}
      setConfirmIsOpen={setConfirmIsOpen}
      shopCartAlert={shopCartAlert}
      token={token}
      isLoad={isLoad}
      error={error}
    />
  );
}

export default HomeContainer;
