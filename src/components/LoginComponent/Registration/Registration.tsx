import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { registerScheme } from '../../../utils/scheme';
import { RegisterData, RegisterProps } from '../types';
import '../Login.scss';
import { BASE_ROUTER } from '../../../consts/paths';
import { Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

type RegisterFieldsType = {
  name: string;
  placeholder: string;
  type: string;
};

const Registration: React.FC<RegisterProps> = ({ setIsRegister, onSubmit, isLoad, error }) => {
  const navigate = useNavigate();

  // const registerFields: RegisterFieldsType[] = [
  //   { name: 'username', placeholder: 'Введите логин/email', type: 'text' },
  //   { name: 'password', placeholder: 'Введите пароль', type: 'password' },
  //   { name: 'confirmPassword', placeholder: 'Подтвердите пароль', type: 'password' },
  // ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(registerScheme),
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
            <h3 className="login__title">Регистрация</h3>
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
              <label className="login__form__label">
                <input className="login__form__input" placeholder={'Введите логин/email'} {...register('username')} />
                <span className="login__form__error">{errors?.username?.message}</span>
              </label>
              <label className="login__form__label">
                <input
                  className="login__form__input"
                  type="password"
                  placeholder="Введите пароль"
                  {...register('password')}
                />
                <span className="login__form__error">{errors?.password?.message}</span>
              </label>
              <label className="login__form__label">
                <input
                  className="login__form__input"
                  type="password"
                  placeholder="Подтвердите пароль"
                  {...register('confirmPassword')}
                />
                <span className="login__form__error">{errors?.confirmPassword?.message}</span>
              </label>
              {error && (
                <div className="container">
                  <Alert type="error" message={error} />
                </div>
              )}
              <div className="login__form__buttons">
                <button className="login__form__button">Зарегистрироваться</button>
                <div>Есть аккаунт? Войдите</div>
                <button className="login__form__button" onClick={() => setIsRegister(false)}>
                  Войти
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Registration;
