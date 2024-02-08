import { AuthFieldsType, createProductFieldsType, RegisterFieldsType } from './types';

export const authFields: AuthFieldsType[] = [
  { name: 'username', placeholder: 'Введите логин/email', type: 'text' },
  { name: 'password', placeholder: 'Введите пароль', type: 'text' },
];

export const registerFields: RegisterFieldsType[] = [
  ...authFields,
  { name: 'confirmPassword', placeholder: 'Подтвердите пароль', type: 'text' },
];

export const createProductFields: createProductFieldsType[] = [
  { name: 'title', placeholder: 'Введите название товара', type: 'text' },
  { name: 'description', placeholder: 'Введите описание товара', type: 'text' },
  { name: 'price', placeholder: 'Введите цену товара', type: 'number' },
];

export const isValidImage = (url: string) => {
  const imagePattern = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  return imagePattern.test(url);
};
