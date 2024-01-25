import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import Navigation from '../components/HeaderComponent/Navigation/Navigation';
import {
  ABOUT,
  BASE_ROUTER,
  CONTACTS,
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  LOGIN,
  PRODUCT_DESCRIPTION,
  SHOP_CART,
} from '../consts/paths';
import CreateProductPage from './CreateProductPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ProductDescriptionPage from './ProductDescriptionPage';
import ShopCartPage from './ShopCartPage';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={BASE_ROUTER}
        element={
          <>
            <HeaderComponent />
            <HomePage />
          </>
        }
      />
      <Route
        path={ABOUT}
        element={
          <>
            <HeaderComponent />
            <div>О нас</div>
          </>
        }
      />
      <Route
        path={CONTACTS}
        element={
          <>
            <HeaderComponent />
            <div>Контакты</div>
          </>
        }
      />
      <Route
        path={SHOP_CART}
        element={
          <>
            <Navigation />
            <ShopCartPage />
          </>
        }
      />
      <Route path={CREATE_PRODUCT} element={<CreateProductPage />} />
      <Route path={EDIT_PRODUCT + '/:productId'} element={<CreateProductPage />} />
      <Route path={PRODUCT_DESCRIPTION + '/:productDescId'} element={<ProductDescriptionPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
