import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { registerScheme } from '../../../utils/scheme';
import { RegisterData, RegisterProps } from '../types';
import '../Login.scss';
import { BASE_ROUTER } from '../../../consts/paths';
import { Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { registerFields } from '../../../utils/utils';

const Registration: React.FC<RegisterProps> = ({ setIsRegister, onSubmit, onCloseError, isLoad, error }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(registerScheme),
  });

  if (isLoad) {
    return (
      <div className="login__container">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

  return (
    <div className="login__container">
      <div className="login__back-button__wrapper">
        <button className="login__back-button" onClick={() => navigate(BASE_ROUTER)}>
          Вернуться на главную
        </button>
      </div>
      <div className="login__wrapper">
        <h3 className="login__title">Регистрация</h3>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          {registerFields.map(({ name, placeholder, type }) => {
            return (
              <label key={name} className="login__form__label">
                <input type={type} className="login__form__input" placeholder={placeholder} {...register(name)} />
                <span className="login__form__error">{errors[name]?.message}</span>
              </label>
            );
          })}
          {error && <Alert type="error" message={error} onClose={onCloseError} closable />}
          <div className="login__form__buttons">
            <button className="login__form__button">Зарегистрироваться</button>
            <div>Есть аккаунт? Войдите</div>
            <button className="login__form__button" onClick={() => setIsRegister(false)}>
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
