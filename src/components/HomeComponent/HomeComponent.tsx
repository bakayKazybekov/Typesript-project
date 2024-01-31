import React from 'react';
import { HomeComponentProps } from './types';
import Interaction from './Interaction/Interaction';
import ProductsList from './ProductsList/ProductsList';
import CreateButton from './CreateButton/CreateButton';
import './Home.scss';

const HomeComponent: React.FC<HomeComponentProps> = ({
  onSubmitSearch,
  onChangeSearch,
  filters,
  onResetSearch,
  showResetButton,
  priceSortingState,
  dateSortingState,
  products,
  setDeleteId,
  deleteProductTitle,
  setDeleteProductTitle,
  onDelete,
  confirmModalIsOpen,
  setConfirmModalIsOpen,
  shopCartAlert,
  addCart,
  token,
  isLoad,
  error,
}) => {
  return (
    <div className="home__wrapper">
      <Interaction
        onSubmitSearch={onSubmitSearch}
        onChangeSearch={onChangeSearch}
        filters={filters}
        onResetSearch={onResetSearch}
        showResetButton={showResetButton}
        priceSortingState={priceSortingState}
        dateSortingState={dateSortingState}
      />
      <ProductsList
        products={products}
        setDeleteId={setDeleteId}
        deleteProductTitle={deleteProductTitle}
        setDeleteProductTitle={setDeleteProductTitle}
        onDelete={onDelete}
        confirmModalIsOpen={confirmModalIsOpen}
        setConfirmModalIsOpen={setConfirmModalIsOpen}
        shopCartAlert={shopCartAlert}
        addCart={addCart}
        token={token}
        isLoad={isLoad}
        error={error}
      />
      <CreateButton token={token} />
    </div>
  );
};

export default HomeComponent;
