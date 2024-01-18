import LoginButton from './LoginButton/LoginButton';
import Navigation from './Navigation/Navigation';
import styles from './Header.module.scss';

function HeaderComponent() {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <LoginButton />
    </div>
  );
}

export default HeaderComponent;
