import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Navigation from "./components/HeaderComponent/Naviagtion/Navigation";
import CreateProductPage from "./pages/CreateProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import ShopCartPage from "./pages/ShopCartPage";
import { GlobalStyles } from "./styles";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles/>
    <Routes>
      <Route path="/" element={(
        <>
          <HeaderComponent/>
          <HomePage/>
        </>
      )}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/create-product" element={<CreateProductPage/>}/>
      <Route path="/edit-product/:productId" element={<CreateProductPage/>}/>
      <Route path="/product-description/:productDescId" element={<ProductDescriptionPage/>}/>
      <Route path="/shop-cart" element={(
        <>
          <Navigation/>
          <ShopCartPage/>
        </>
      )}/>
    </Routes>
  </BrowserRouter>
)

export default App;
