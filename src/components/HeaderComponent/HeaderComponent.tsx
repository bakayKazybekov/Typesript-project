import { Wrapper } from "./HeaderComponentStyles"
import LoginButton from "./LoginButton/LoginButton"
import Navigation from "./Naviagtion/Navigation"

function HeaderComponent () {
  return (
    <Wrapper>
      <Navigation/>
      <LoginButton/>
    </Wrapper>
  )
}

export default HeaderComponent