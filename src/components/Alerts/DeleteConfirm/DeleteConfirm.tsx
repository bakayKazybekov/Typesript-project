import React from 'react';
import { Transition } from 'react-transition-group';
import { AlertState } from '../../../Types/types';
import './DeleteConfirm.scss';

type DeleteConfirmProps = {
  confirmFunction: () => void;
  onClose: () => void;
  isOpen: boolean;
  text: string;
  productTitle?: string;
};
const DeleteConfirm: React.FC<DeleteConfirmProps> = ({ confirmFunction, onClose, isOpen, text, productTitle }) => {
  const onWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.classList.contains('modal_wrapper')) {
      onClose();
    }
  };

  return (
    <Transition in={isOpen} timeout={150} unmountOnExit={true}>
      {(state: AlertState) => (
        <div className={`modal modal_${state}`}>
          <div className="modal_wrapper" onClick={onWrapperClick}>
            <div className="modal_content">
              <div>{text}</div>
              {productTitle && <div>{productTitle}</div>}
              <div className="modal_buttons">
                <button className="modal_close_button" onClick={onClose}>
                  Отмена
                </button>
                <button
                  className="modal_confirm_button"
                  onClick={() => {
                    confirmFunction();
                    onClose();
                  }}
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default DeleteConfirm;
