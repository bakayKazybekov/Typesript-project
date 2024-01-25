import React from 'react';
import { HomeComponentProps } from './types';
import Interaction from './Interaction/Interaction';
import ProductsList from './ProductsList/ProductsList';
import CreateButton from './CreateButton/CreateButton';
import styles from './Home.module.scss';

const HomeComponent: React.FC<HomeComponentProps> = ({
  onSubmitSearch,
  onChangeSearch,
  filters,
  products,
  setDeleteId,
  onDelete,
  confirmModalIsOpen,
  setConfirmModalIsOpen,
  shopCartAlert,
  onClickShopCartButton,
  token,
  isLoad,
  error,
}) => {
  return (
    <div className={styles.wrapper}>
      <Interaction onSubmitSearch={onSubmitSearch} onChangeSearch={onChangeSearch} filters={filters} />
      <ProductsList
        products={products}
        setDeleteId={setDeleteId}
        onDelete={onDelete}
        confirmModalIsOpen={confirmModalIsOpen}
        setConfirmModalIsOpen={setConfirmModalIsOpen}
        shopCartAlert={shopCartAlert}
        onClickShopCartButton={onClickShopCartButton}
        token={token}
        isLoad={isLoad}
        error={error}
      />
      <CreateButton token={token} />
    </div>
  );
};

export default HomeComponent;
