import React from 'react';
import { Link } from 'react-router-dom'
import { avatar } from '../../../images';
import { AvatarImage, LoginBtn, LogOutWrapper } from './LoginButtonStyles';

const LoginButton: React.FC = () => {
  const token = localStorage.getItem('token');
  const logOut = () => {
    if (token) {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }

  if (token) return (
    <LogOutWrapper>
      <AvatarImage src={avatar} alt="avatar" /> 
      <LoginBtn onClick={logOut}>ВЫЙТИ</LoginBtn>
    </LogOutWrapper>
  )
  return (
    <LogOutWrapper>
      <Link to='/login'><LoginBtn>ВОЙТИ</LoginBtn></Link>
    </LogOutWrapper>
  )
}

export default LoginButton