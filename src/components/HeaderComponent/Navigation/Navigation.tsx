import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { ABOUT, BASE_ROUTER, CONTACTS, SHOP_CART } from '../../../consts/paths';
import { menuButtonIcon } from '../../../images';
import '../Header.scss';

enum AlertState {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}

const Navigation: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const links = [
    { link: BASE_ROUTER, name: 'Главная' },
    { link: ABOUT, name: 'О нас' },
    { link: CONTACTS, name: 'Контакты' },
    { link: SHOP_CART, name: 'Корзина' },
  ];

  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active_nav' : '');

  return (
    <>
      <header className="nav__wrapper">
        <nav className="navigate">
          {links.map(({ link, name }) => (
            <NavLink key={name} className={setActive} to={link}>
              {name}
            </NavLink>
          ))}
        </nav>
      </header>
      <div>
        <div className="nav-button__wrapper">
          <div className="adaptive-nav__button" onClick={() => setNavIsOpen(!navIsOpen)}>
            <img src={menuButtonIcon} alt="menu-button" />
          </div>
        </div>
        <Transition in={navIsOpen} timeout={300}>
          {(state: AlertState) => (
            <header className={`adaptive-nav__wrapper menu__wrapper__${state}`}>
              <nav className={`adaptive-navigate menu__${state}`}>
                {links.map(({ link, name }) => (
                  <NavLink key={name} className={setActive} to={link} onClick={() => setNavIsOpen(false)}>
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
