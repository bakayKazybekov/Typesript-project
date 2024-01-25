import React from 'react';
import { Transition } from 'react-transition-group';
import styles from './DeleteConfirm.module.scss';

type DeleteConfirmProps = {
  onDeleteConfirm: () => void;
  onClose: () => void;
  isOpen: boolean;
};

enum AlertState {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({ onDeleteConfirm, onClose, isOpen }) => {
  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state: AlertState) => (
          <div className={`${styles.delete} ${styles[`delete_${state}`]}`}>
            <div className={styles.delete_wrapper}>
              <div className={styles.delete_content}>
                <p>Вы уверены что хотите удалить этот товар?</p>
                <div className={styles.delete_buttons}>
                  <button className={styles.close_button} onClick={onClose}>
                    Отмена
                  </button>
                  <button
                    className={styles.confirm_button}
                    onClick={() => {
                      onDeleteConfirm();
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
