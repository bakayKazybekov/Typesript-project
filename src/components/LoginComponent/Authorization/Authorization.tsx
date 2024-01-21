import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { authorizationScheme } from '../../../utils/scheme';
import { AuthProps } from '../types';
import { Alert, CircularProgress } from '@mui/material';
import { BASE_ROUTER } from '../../../consts/paths';
import styles from '../Login.module.scss';
const Authorization: React.FC<AuthProps> = ({ setIsRegister, onSubmit, isLoad, error }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authorizationScheme),
  });

  if (isLoad) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.back_button_wrapper}>
        <button className={styles.back_button} onClick={() => navigate(BASE_ROUTER)}>
          Вернуться на главную
        </button>
      </div>
      <div className={styles.login_wrapper}>
        <h3 className={styles.login_title}>Авторизация</h3>
        <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.login_form_label}>
            <input
              className={styles.login_form_input}
              type="text"
              placeholder="Введите логин/email"
              {...register('username')}
            />
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
          {error && (
            <div className={styles.container}>
              <Alert variant="outlined" severity="error">
                {error}
              </Alert>
            </div>
          )}
          <div className={styles.login_form_buttons}>
            <button className={styles.login_form_button}>Войти</button>
            <div>Нет аккаунта? Зарегистрируйтесь</div>
            <button className={styles.login_form_button} onClick={() => setIsRegister(true)}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
