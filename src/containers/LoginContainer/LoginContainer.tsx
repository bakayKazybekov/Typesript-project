import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Authorization, Registration } from "../../components/LoginComponent"
import { registerAction, loginAction } from "../../store/login/actions"
import { useAppDispatch, useAppSelector } from "../../hook"
import { LoginFormValues } from "../../Types/types"


function LoginContainer () {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isLoad, error } = useAppSelector((state) => state.loginReducer)
  
  const [isRegister, setIsRegister] = useState(false)
  
  const onSubmit = (data: LoginFormValues) => {
    if (isRegister) {
      dispatch(registerAction({
        navigate,
        username: data.username,
        password: data.password
      }))
    } else {
        dispatch(loginAction({navigate, ...data}))
    }
  }
  
  if (isRegister) return <Registration onSubmit={onSubmit} setIsRegister={setIsRegister} error={error} isLoad={isLoad}/> 
  return <Authorization onSubmit={onSubmit} setIsRegister={setIsRegister} error={error} isLoad={isLoad}/>
}

export default LoginContainer