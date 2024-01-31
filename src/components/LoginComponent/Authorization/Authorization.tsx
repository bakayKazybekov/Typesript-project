import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { authorizationScheme } from '../../../utils/scheme';
import { AuthProps } from '../types';
import { BASE_ROUTER } from '../../../consts/paths';
import '../Login.scss';
import { Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { authFields } from '../../../utils/loginUtils';
const Authorization: React.FC<AuthProps> = ({ setIsRegister, onSubmit, isLoad, error }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authorizationScheme),
  });

  return (
    <div className="login__container">
      {isLoad ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      ) : (
        <>
          <div className="login__back-button__wrapper">
            <button className="login__back-button" onClick={() => navigate(BASE_ROUTER)}>
              Вернуться на главную
            </button>
          </div>
          <div className="login__wrapper">
            <h3 className="login__title">Авторизация</h3>
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
              {authFields.map(({ name, placeholder, type }) => {
                return (
                  <label className="login__form__label">
                    <input type={type} className="login__form__input" placeholder={placeholder} {...register(name)} />
                    <span className="login__form__error">{errors[name]?.message}</span>
                  </label>
                );
              })}
              {error && (
                <div className="login__container">
                  <Alert type="error" message={error} />
                </div>
              )}
              <div className="login__form__buttons">
                <button className="login__form__button">Войти</button>
                <div>Нет аккаунта? Зарегистрируйтесь</div>
                <button className="login__form__button" onClick={() => setIsRegister(true)}>
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Authorization;
