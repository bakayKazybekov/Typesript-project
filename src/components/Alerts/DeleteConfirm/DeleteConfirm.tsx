import React from 'react';
import { Transition } from 'react-transition-group';
import './DeleteConfirm.scss';

type DeleteConfirmProps = {
  confirmFunction: () => void;
  onClose: () => void;
  isOpen: boolean;
  text: string;
};

enum AlertState {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({ confirmFunction, onClose, isOpen, text }) => {
  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state: AlertState) => (
          <div className={`modal modal_${state}`}>
            <div className="modal_wrapper">
              <div className="modal_content">
                <p>{text}</p>
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
    </>
  );
};

export default DeleteConfirm;
