import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../consts/paths';
import { avatarIcon } from '../../../images';
import '../Header.scss';

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
      <div className="logout__wrapper">
        <img className="avatar__image" src={avatarIcon} alt="avatar" />
        <button className="logout__button" onClick={onLogout}>
          ВЫЙТИ
        </button>
      </div>
    );
  }
  return (
    <div className="logout__wrapper">
      <Link className="login__button" to={LOGIN}>
        ВОЙТИ
      </Link>
    </div>
  );
};

export default LoginButton;
