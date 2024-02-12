import { registerScheme } from '../../../utils/scheme';
import { RegisterProps } from '../types';
import '../Login.scss';
import { Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { registerFields } from '../../../utils/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

const Registration: React.FC<RegisterProps> = ({ setIsRegister, onSubmit, onCloseError, isLoad, error }) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerScheme),
    reValidateMode: 'onSubmit',
  });

  return (
    <div className="login__container">
      <div className="login__wrapper">
        <h3 className="login__title">Регистрация</h3>
        <form autoComplete="off" className="login__form" onSubmit={handleSubmit(onSubmit)}>
          {_.map(registerFields, ({ name, placeholder, type }) => {
            return (
              <label key={name} className="login__form__label">
                <input type={type} className="login__form__input" placeholder={placeholder} {...register(name)} />
                <span className="login__form__error">{errors[name]?.message}</span>
              </label>
            );
          })}
          {error && <Alert type="error" message={error} onClose={onCloseError} closable />}
          <div className="login__form__buttons">
            {isLoad ? (
              <div className="register__loading__button">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 28, color: 'white' }} spin />} />
              </div>
            ) : (
              <button className="login__form__button">Зарегистрироваться</button>
            )}
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
