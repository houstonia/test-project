
import Logo from '@assets/logo/book-logo.svg';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { Navbar } from './Navbar';

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/" className={styles.header__content__logo}>
          <img src={Logo} alt="" />
          <span></span> SmartScore
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
