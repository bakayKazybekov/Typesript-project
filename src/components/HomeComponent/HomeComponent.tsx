import React from 'react';
import { HomeComponentProps } from './types';
import Interaction from './Interaction/Interaction';
import ProductsList from './ProductsList/ProductsList';
import CreateButton from './CreateButton/CreateButton';
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
        error={error}
      />
      <CreateButton token={token} />
    </div>
  );
};

export default HomeComponent;
