import BurgerMenuLogo from '@assets/icons/burger-menu.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { DropDown } from '../DropDown/DropDown';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <div className={styles.navbar}>
      <nav className={`${styles.navbar_nav} ${menuOpen ? styles.isMenu : ''}`}>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/results">Результаты</Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link to="/">О нас</Link>
            <DropDown isOpen={isOpen}/>
          </li>
        </ul>
      </nav>
      <div className={styles.navbar_toggle} onClick={menuToggleHandler}>
        {menuOpen ? <>Назад</> : <img src={BurgerMenuLogo} alt="" />}
      </div>
    </div>
  );
};
