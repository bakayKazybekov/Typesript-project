import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import '../ShopCart.scss';

type CearButtonProps = {
  clearShopCart: () => void;
  confirmModalIsOpen: boolean;
  setConfirmModalIsOpen: (state: boolean) => void;
};

const ClearButton: React.FC<CearButtonProps> = ({ clearShopCart, confirmModalIsOpen, setConfirmModalIsOpen }) => {
  return (
    <>
      <button className="shop-cart__clear-button" onClick={() => setConfirmModalIsOpen(true)}>
        Очистить корзину
      </button>
      <DeleteConfirm
        confirmFunction={clearShopCart}
        onClose={() => setConfirmModalIsOpen(false)}
        isOpen={confirmModalIsOpen}
        text="Вы уверены что хотите очистить корзину?"
      />
    </>
  );
};

export default ClearButton;
