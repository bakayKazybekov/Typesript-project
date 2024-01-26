import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../consts/paths';
import { avatar } from '../../../images';
import styles from '../Header.module.scss';

const LoginButton: React.FC = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const onLogout = () => {
    if (token) {
      localStorage.removeItem('token');
      navigate(LOGIN);
    }
  };

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
