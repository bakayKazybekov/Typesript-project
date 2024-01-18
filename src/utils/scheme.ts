import * as yup from 'yup';

const stringRequired = yup.string().required('Поле обязательно');
const minLength6 = stringRequired.min(6, 'не менее 6-символов');

const scheme = {
  username: stringRequired.min(3, 'Не менее 3-символов').max(12, 'Не более 12-символов'),
  password: minLength6,
};

export const authorizationScheme = yup.object(scheme);

export const registerScheme = yup.object({
  ...scheme,
  confirmPassword: minLength6.test('passwords-match', 'Пароли не совпадают', function (value) {
    return this.parent.password === value;
  }),
});

export const createProductScheme = yup.object({
  title: stringRequired.min(1, 'Не менее 1-символа').max(25, 'Не более 25-символов'), // dry
  description: stringRequired.min(1, 'Не менее 1-символа'),
  price: stringRequired.max(3, 'Не более 3-символов'),
});
