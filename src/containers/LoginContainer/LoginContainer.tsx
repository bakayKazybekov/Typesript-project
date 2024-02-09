import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authorization, Registration } from '../../components/LoginComponent';
import { registerAction, loginAction } from '../../store/login/actions';
import { useAppDispatch, useAppSelector } from '../../hook';
import { LoginFormValues } from '../../Types/types';
import { cleanErrorAction } from '../../store/login/slice';
import { useCallback } from 'react';

function LoginContainer() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoad, authError, registerError } = useAppSelector((state) => state.loginReducer);

  const [isRegister, setIsRegister] = useState(false);

  const authOnSubmit = useCallback(
    (data: LoginFormValues) => {
      dispatch(loginAction({ navigate, ...data }));
    },
    [dispatch, navigate],
  );

  const registerOnSubmit = useCallback(
    (values: LoginFormValues) => {
      dispatch(
        registerAction({
          navigate,
          username: values.username,
          password: values.password,
        }),
      );
    },
    [dispatch, navigate, isRegister],
  );

  const onCloseError = useCallback(() => {
    dispatch(cleanErrorAction());
  }, [dispatch]);

  if (isRegister)
    return (
      <Registration
        onSubmit={registerOnSubmit}
        onCloseError={onCloseError}
        setIsRegister={setIsRegister}
        error={registerError}
        isLoad={isLoad}
      />
    );
  return (
    <Authorization
      onSubmit={authOnSubmit}
      onCloseError={onCloseError}
      setIsRegister={setIsRegister}
      error={authError}
      isLoad={isLoad}
    />
  );
}

export default LoginContainer;
