import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { ABOUT, BASE_ROUTER, CONTACTS, SHOP_CART } from '../../../consts/paths';
import { menuButton } from '../../../images';
import styles from '../Header.module.scss';

enum AlertState {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}

const Navigation: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  console.log('navIsOpen', navIsOpen);

  const links = [
    { link: BASE_ROUTER, name: 'Главная' },
    { link: ABOUT, name: 'О нас' },
    { link: CONTACTS, name: 'Контакты' },
    { link: SHOP_CART, name: 'Корзина' },
  ];

  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : '');

  return (
    <>
      <header className={styles.nav_wrapper}>
        <nav className={styles.navigate}>
          {links.map(({ link, name }) => (
            <NavLink key={name} className={setActive} to={link}>
              {name}
            </NavLink>
          ))}
        </nav>
      </header>
      <div>
        <div className={styles.nav_button_wrapper}>
          <div className={styles.adaptive_nav_button} onClick={() => setNavIsOpen(!navIsOpen)}>
            <img src={menuButton} alt="menu-button" />
          </div>
        </div>
        <Transition in={navIsOpen} timeout={200}>
          {(state: AlertState) => (
            <header className={`${styles.adaptive_nav_wrapper} ${styles[`menu_wrapper_${state}`]}`}>
              <nav className={`${styles.adaptive_navigate} ${styles[`menu_${state}`]}`}>
                {links.map(({ link, name }) => (
                  <NavLink key={name} className={setActive} to={link}>
                    {name}
                  </NavLink>
                ))}
              </nav>
            </header>
          )}
        </Transition>
      </div>
    </>
  );
};

export default Navigation;
