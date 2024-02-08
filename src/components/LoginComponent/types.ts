import { SubmitHandler } from 'react-hook-form';
import { LoginFormValues } from '../../Types/types';

type LoginProps = {
  setIsRegister: (state: boolean) => void; //
  onCloseError: () => void;
  isLoad: boolean;
  error?: string;
};

export type AuthData = {
  username: string;
  password: string;
};

export type RegisterData = AuthData & {
  confirmPassword: string;
};

export type AuthProps = LoginProps & {
  onSubmit: SubmitHandler<AuthData>;
};

export type RegisterProps = LoginProps & {
  onSubmit: (values: LoginFormValues) => void;
};
