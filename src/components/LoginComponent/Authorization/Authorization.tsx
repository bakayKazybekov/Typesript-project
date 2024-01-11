import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { authorizationScheme } from '../../../utils/scheme'
import { AuthProps } from '../../../Types/types'
import { 
  BackButton,
  BackButtonWrapper, 
  Button, 
  Container, 
  LoginForm, 
  LoginFormButtons, 
  LoginFormInput, 
  LoginFormLabel, 
  LoginTitle 
} from '../LoginStyles'

const Authorization: React.FC<AuthProps> = ({ setIsRegister, onSubmit, isLoad, error }) => {
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(authorizationScheme)
  })
  
  return (
    <Container>
      <BackButtonWrapper>
        <BackButton onClick={() => navigate('/')}>Вернуться на главную</BackButton>
      </BackButtonWrapper>
      <LoginTitle>Войти</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginFormLabel>
          <LoginFormInput type="text" placeholder="Введите логин/email" {...register('username')} />
          <span>{errors?.username?.message}</span>
        </LoginFormLabel>
        <LoginFormLabel>
          <LoginFormInput type="password" placeholder="Введите пароль" {...register('password')} />
          <span>{errors?.password?.message}</span>
        </LoginFormLabel>
        <LoginFormButtons>
          <Button>Войти</Button>
          <div>Нет аккаунта? Зарегистрируйтесь</div>
          <Button onClick={() => setIsRegister(true)}>Зарегистрироваться</Button>
        </LoginFormButtons>
      </LoginForm>
    </Container> 
  )
}

export default Authorization