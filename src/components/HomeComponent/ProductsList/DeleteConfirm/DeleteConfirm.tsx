import React from 'react';
import styles from './DeleteConfirm.module.scss';

type DeleteConfirmProps = {
  onDeleteConfirm: () => void;
  onClose: () => void;
  isOpen: boolean;
};

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({ onDeleteConfirm, onClose, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div>
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
    </>
  );
};

export default DeleteConfirm;
