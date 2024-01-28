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
  addCart,
  token,
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
        addCart={addCart}
        token={token}
      />
      <CreateButton token={token} />
    </div>
  );
};

export default HomeComponent;
