import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { registerScheme } from '../../../utils/scheme';
import { RegisterData, RegisterProps } from '../types';
import styles from '../Login.module.scss';
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

  const registerFields: RegisterFieldsType[] = [
    { name: 'username', placeholder: 'Введите логин/email', type: 'text' },
    { name: 'password', placeholder: 'Введите пароль', type: 'password' },
    { name: 'confirmPassword', placeholder: 'Подтвердите пароль', type: 'password' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(registerScheme),
  });

  if (isLoad) {
    return (
      <div className={styles.container}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

  const authFields = [
    { key: 'username', placeholder: 'Введите логин/email', type: 'text' },
    { key: 'password', placeholder: 'Введите пароль', type: 'password' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.back_button_wrapper}>
        <button className={styles.back_button} onClick={() => navigate(BASE_ROUTER)}>
          Вернуться на главную
        </button>
      </div>
      <div className={styles.login_wrapper}>
        <h3 className={styles.login_title}>Регистрация</h3>
        <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.login_form_label}>
            <input className={styles.login_form_input} placeholder={'Введите логин/email'} {...register('username')} />
            <span>{errors?.username?.message}</span>
          </label>
          <label className={styles.login_form_label}>
            <input
              className={styles.login_form_input}
              type="password"
              placeholder="Введите пароль"
              {...register('password')}
            />
            <span>{errors?.password?.message}</span>
          </label>
          <label className={styles.login_form_label}>
            <input
              className={styles.login_form_input}
              type="password"
              placeholder="Подтвердите пароль"
              {...register('confirmPassword')}
            />
            <span>{errors?.confirmPassword?.message}</span>
          </label>
          {error && (
            <div className={styles.container}>
              <Alert type="error" message={error} />
            </div>
          )}
          <div className={styles.login_form_buttons}>
            <button className={styles.login_form_button}>Зарегистрироваться</button>
            <div>Есть аккаунт? Войдите</div>
            <button className={styles.login_form_button} onClick={() => setIsRegister(false)}>
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
