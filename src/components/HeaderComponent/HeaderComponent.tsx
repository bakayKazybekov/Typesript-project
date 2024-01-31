import LoginButton from './LoginButton/LoginButton';
import Navigation from './Navigation/Navigation';
import './Header.scss';

function HeaderComponent() {
  return (
    <header className="header__wrapper">
      <Navigation />
      <LoginButton />
    </header>
  );
}

export default HeaderComponent;
