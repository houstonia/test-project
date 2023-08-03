import Logo from '@assets/logo/book-logo.svg';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={Logo} alt="" />
      <p className={styles.footer_title}>SmartScore</p>
    </div>
  );
};
