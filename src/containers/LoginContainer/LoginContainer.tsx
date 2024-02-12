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

  const [isRegister, setIsRegister] = useState<boolean>(false);
  console.log('isRegister', isRegister);

  const onSubmit = useCallback(
    (data: LoginFormValues) => {
      if (isRegister) {
        dispatch(
          registerAction({
            navigate,
            username: data.username,
            password: data.password,
          }),
        );
      } else {
        dispatch(loginAction({ navigate, ...data }));
      }
    },
    [dispatch, navigate, isRegister],
  );

  const onCloseError = useCallback(() => {
    dispatch(cleanErrorAction());
  }, [dispatch]);

  if (isRegister)
    return (
      <Registration
        onSubmit={onSubmit}
        onCloseError={onCloseError}
        setIsRegister={setIsRegister}
        error={registerError}
        isLoad={isLoad}
      />
    );
  return (
    <Authorization
      onSubmit={onSubmit}
      onCloseError={onCloseError}
      setIsRegister={setIsRegister}
      error={authError}
      isLoad={isLoad}
    />
  );
}

export default LoginContainer;
