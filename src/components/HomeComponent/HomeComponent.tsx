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
  onDelete,
  confirmModalIsOpen,
  setConfirmModalIsOpen,
  shopCartAlert,
  addCart,
  token,
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
        onDelete={onDelete}
        confirmModalIsOpen={confirmModalIsOpen}
        setConfirmModalIsOpen={setConfirmModalIsOpen}
        shopCartAlert={shopCartAlert}
        addCart={addCart}
        token={token}
      />
      <CreateButton token={token} />
    </div>
  );
};

export default HomeComponent;
