import * as yup from 'yup'

const scheme = {
  username: yup.string().required('Поле обязательно').min(3, 'Не менее 3-х').max(12, 'Не более 12-ти'),
  password: yup.string().required('Поле обязательно').min(6, 'Не менее 6-ти')
}

export const authorizationScheme = yup.object(scheme)

export const registerScheme = yup.object({
  ...scheme,
  confirmPassword: yup.string().required('Поле обязательно').min(6, 'Не менее 6-ти')
    .test('passwords-match', 'Пароли не совпадают', function (value) {
      return this.parent.password === value
    })
})

export const createProductScheme = yup.object({
  title: yup.string().required('Поле обязательно').min(1, 'Не менее 1го символа').max(25, 'Не более 25ти символов'), // dry
  description: yup.string().required('Поле обязательно').min(1, 'Не менее 1го символа'),
  price: yup.string().required('Поле обязательно').max(3, 'Не более 3х символов')
})