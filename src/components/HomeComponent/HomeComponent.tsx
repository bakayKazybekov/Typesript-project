import React from 'react';
import { HomeComponentProps } from './types';
import Interaction from './Interaction/Interaction';
import ProductsList from './ProductsList/ProductsList';
import CreateButton from './ProductsList/CreateButton/CreateButton';
import './Home.scss';

const HomeComponent: React.FC<HomeComponentProps> = ({
  handleProductAction,
  onSubmitSearch,
  onChangeSearch,
  showResetButton,
  priceSortingState,
  dateSortingState,
  products,
  deleteProduct,
  setDeleteProduct,
  confirmIsOpen,
  setConfirmIsOpen,
  shopCartAlert,
  token,
  isLoad,
  error,
}) => {
  return (
    <div className="home__wrapper">
      <Interaction
        handleProductAction={handleProductAction}
        onSubmitSearch={onSubmitSearch}
        onChangeSearch={onChangeSearch}
        showResetButton={showResetButton}
        priceSortingState={priceSortingState}
        dateSortingState={dateSortingState}
        products={products}
        error={error}
      />
      <ProductsList
        handleProductAction={handleProductAction}
        products={products}
        deleteProduct={deleteProduct}
        setDeleteProduct={setDeleteProduct}
        confirmIsOpen={confirmIsOpen}
        setConfirmIsOpen={setConfirmIsOpen}
        shopCartAlert={shopCartAlert}
        token={token}
        isLoad={isLoad}
      />
      <CreateButton token={token} />
    </div>
  );
};

export default HomeComponent;
