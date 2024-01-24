import { getProductAction } from '../../store/product/actions';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import { ProductType, ShopCartProductType } from '../../Types/types';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setInAccount } from '../../store/login/slice';
import _ from 'lodash';

function HomeContainer() {
  const dispatch = useAppDispatch();

  const [searchProducts, setSearchProducts] = useState<string>('');
  const [sortingOpertator, setSortingOperator] = useState('');
  const [shopCartAlert, setShopCartAlert] = useState<boolean>(false);

  const onClickShopCartButton = (product: ProductType) => {
    setShopCartAlert(true);
    setTimeout(() => {
      setShopCartAlert(false);
    }, 1000);
    addCart(product);
  };

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

  const addCart = useCallback((product: ProductType) => {
    const getLocalProducts: ShopCartProductType[] = JSON.parse(localStorage.getItem('products') ?? '[]');
    const obj = {
      ...product,
      uniqueId: Math.random(),
    };
    const arr = [...getLocalProducts, obj];
    localStorage.setItem('products', JSON.stringify(arr));
  }, []);

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
      addCart={addCart}
      shopCartAlert={shopCartAlert}
      onClickShopCartButton={onClickShopCartButton}
      token={token}
      isLoad={isLoad}
      error={error}
    />
  );
}

export default HomeContainer;
