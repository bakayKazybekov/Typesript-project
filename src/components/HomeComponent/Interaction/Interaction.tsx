import { Alert } from 'antd';
import React from 'react';
import { InteractionProps } from '../types';
import './Interaction.scss';
import Search from './Search/Search';
import Sorting from './Sorting/Sorting';

const Interaction: React.FC<InteractionProps> = ({
  handleProductAction,
  onSubmitSearch,
  onChangeSearch,
  showResetButton,
  priceSortingState,
  dateSortingState,
  products,
  error,
}) => {
  if (!products.length) {
    return <div></div>;
  }

  return (
    <div className="interaction_wrapper">
      <Search
        handleProductAction={handleProductAction}
        onSubmitSearch={onSubmitSearch}
        onChangeSearch={onChangeSearch}
        showResetButton={showResetButton}
      />
      <Sorting
        handleProductAction={handleProductAction}
        priceSortingState={priceSortingState}
        dateSortingState={dateSortingState}
      />
      {!!error && <Alert type="error" message={error} closable onClose={() => handleProductAction('closeError')} />}
    </div>
  );
};

export default Interaction;
