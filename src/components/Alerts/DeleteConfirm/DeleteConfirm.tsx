import React from 'react';
import { Transition } from 'react-transition-group';
import styles from './DeleteConfirm.module.scss';

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
          <div className={`${styles.delete} ${styles[`delete_${state}`]}`}>
            <div className={styles.delete_wrapper}>
              <div className={styles.delete_content}>
                <p>{text}</p>
                <div className={styles.delete_buttons}>
                  <button className={styles.close_button} onClick={onClose}>
                    Отмена
                  </button>
                  <button
                    className={styles.confirm_button}
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
