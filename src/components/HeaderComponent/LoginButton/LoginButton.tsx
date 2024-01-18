import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../../consts/paths';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { avatar } from '../../../images';
import { setInAccount } from '../../../store/login/slice';
import styles from './LoginButton.module.scss';

const LoginButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const { inAccount } = useAppSelector((state) => state.loginReducer);

  const token = localStorage.getItem('token');
  const onLogout = useCallback(() => {
    if (inAccount) {
      dispatch(setInAccount(false));
      localStorage.removeItem('token');
    }
    console.log('logout');
  }, [dispatch, inAccount]);

  if (token) {
    return (
      <div className={styles.logout_wrapper}>
        <img className={styles.avatar_image} src={avatar} alt="avatar" />
        <button className={styles.logout_button} onClick={onLogout}>
          ВЫЙТИ
        </button>
      </div>
    );
  }
  return (
    <div className={styles.logout_wrapper}>
      <Link className={styles.login_button} to={LOGIN}>
        ВОЙТИ
      </Link>
    </div>
  );
};

export default LoginButton;
