import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { registerScheme } from '../../../utils/scheme'
import { RegisterProps } from '../../../Types/types'
import { 
  BackButton,
  BackButtonWrapper, 
  Button, 
  Container, 
  Loading, 
  LoginForm, 
  LoginFormButtons, 
  LoginFormInput, 
  LoginFormLabel, 
  LoginTitle 
} from '../LoginStyles'
import { Alert, CircularProgress } from '@mui/material'

const Registration: React.FC<RegisterProps> = ({ setIsRegister, onSubmit, isLoad, error }) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerScheme)
  })

  if (isLoad) {
    return (
      <Container>
        <Loading>
          <CircularProgress/>
        </Loading>
      </Container>
    )
  }
  return (
    <Container>
      <BackButtonWrapper>
        <BackButton onClick={() => navigate('/')}>Вернуться на главную</BackButton>
      </BackButtonWrapper>
      <LoginTitle>Регистрация</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginFormLabel>
          <LoginFormInput placeholder={"Введите логин/email"} {...register('username')} />
          <span>{errors?.username?.message}</span>
        </LoginFormLabel>
        <LoginFormLabel>
          <LoginFormInput type="password" placeholder="Введите пароль" {...register('password')} />
          <span>{errors?.password?.message}</span>
        </LoginFormLabel>
        <LoginFormLabel>
          <LoginFormInput type="password" placeholder="Подтвердите пароль" {...register('confirmPassword')}/>
          <span>{errors?.confirmPassword?.message}</span>
        </LoginFormLabel>
        {error && <Container><Alert variant='outlined' severity='error'>{error}</Alert></Container>}
        <LoginFormButtons>
          <Button>Зарегистрироваться</Button>
          <div>Есть аккаунт? Войдите</div>
          <Button onClick={() => setIsRegister(false)}>Войти</Button>
        </LoginFormButtons>
      </LoginForm>
    </Container>
  )
}

export default Registration