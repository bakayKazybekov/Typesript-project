import { registerScheme } from '../../../utils/scheme';
import { RegisterProps } from '../types';
import '../Login.scss';
import { Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { registerFields } from '../../../utils/utils';
import { Formik } from 'formik';

const Registration: React.FC<RegisterProps> = ({ setIsRegister, onSubmit, onCloseError, isLoad, error }) => {
  return (
    <div className="login__container">
      <div className="login__wrapper">
        <h3 className="login__title">Регистрация</h3>
        <Formik
          validationSchema={registerScheme}
          initialValues={{
            username: '',
            password: '',
            confirmPassword: '',
          }}
          validateOnBlur={true}
          onSubmit={onSubmit}
        >
          {({ errors, values, handleChange, handleSubmit }) => (
            <form autoComplete="off" className="login__form" onSubmit={handleSubmit}>
              {registerFields.map(({ name, placeholder, type }) => {
                return (
                  <label key={name} className="login__form__label">
                    <input
                      type={type}
                      name={name}
                      value={values[name]}
                      onChange={handleChange}
                      className="login__form__input"
                      placeholder={placeholder}
                    />
                    <span className="login__form__error">{errors[name]}</span>
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
