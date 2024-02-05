import * as yup from 'yup';

const stringRequiredWithName = (name = 'Поле') =>
  yup.string().required(`Поле "${name}" обязателен для заполнения`).trim();

const scheme = {
  username: stringRequiredWithName('Логин').min(3, 'Не менее 3-символов').max(12, 'Не более 12-символов'),
  password: stringRequiredWithName('Пароль').min(6, 'не менее 6-символов'),
};

export const authorizationScheme = yup.object(scheme);

export const registerScheme = yup.object({
  ...scheme,
  confirmPassword: stringRequiredWithName('Подтверждение пароля')
    .min(6, 'не менее 6-символов')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const createProductScheme = yup.object({
  title: stringRequiredWithName('Название товара').min(1, 'Не менее 1-символа').max(25, 'Не более 25-символов'), // dry
  description: stringRequiredWithName('Описание товара').min(1, 'Не менее 1-символа'),
  price: stringRequiredWithName('Цена товара').max(3, 'Не более 3-символов'),
});
