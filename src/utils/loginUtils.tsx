type RegisterFieldsType = {
  name: 'username' | 'password' | 'confirmPassword';
  placeholder: string;
  type: string;
};
type AuthFieldsType = Omit<RegisterFieldsType, 'name'> & {
  name: 'username' | 'password';
};

export const authFields: AuthFieldsType[] = [
  { name: 'username', placeholder: 'Введите логин/email', type: 'text' },
  { name: 'password', placeholder: 'Введите пароль', type: 'password' },
];

export const registerFields: RegisterFieldsType[] = [
  ...authFields,
  { name: 'confirmPassword', placeholder: 'Подтвердите пароль', type: 'password' },
];
