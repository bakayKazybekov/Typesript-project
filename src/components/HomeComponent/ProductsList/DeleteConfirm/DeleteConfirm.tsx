import { useNavigate, useParams } from 'react-router-dom';
import { BASE_ROUTER } from '../../../../consts/paths';
import { useAppDispatch } from '../../../../hook';
import { deleteProductAction, getProductAction } from '../../../../store/product/actions';
import styles from './DeleteConfirm.module.scss';

const DeleteConfirm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { deleteId } = useParams();

  const onDelete = (id?: string) => {
    if (id) {
      dispatch(deleteProductAction({ navigate, id }))
        .then(() => dispatch(getProductAction()))
        .catch(() => 'Произошла ошибка');
    }
  };

  return (
    <div>
      <div className={styles.delete_wrapper}>
        <div className={styles.delete_content}>
          <p>Вы уверены что хотите удалить этот товар?</p>
          <div className={styles.delete_buttons}>
            <button className={styles.close_button} onClick={() => navigate(BASE_ROUTER)}>
              Отмена
            </button>
            <button className={styles.confirm_button} onClick={() => onDelete(deleteId)}>
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
