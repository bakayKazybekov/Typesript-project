import React from 'react';
import { NavLink } from 'react-router-dom';
import { ABOUT, BASE_ROUTER, CONTACTS, SHOP_CART } from '../../../consts/paths';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const links = [
    { link: BASE_ROUTER, name: 'Главная' },
    { link: ABOUT, name: 'О нас' },
    { link: CONTACTS, name: 'Контакты' },
    { link: SHOP_CART, name: 'Корзина' },
  ];

  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : '');

  return (
    <header className={styles.wrapper}>
      <nav className={styles.navigate}>
        {links.map(({ link, name }) => (
          <NavLink key={name} className={setActive} to={link}>
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
