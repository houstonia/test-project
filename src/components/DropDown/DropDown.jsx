import { items } from './constants';
import styles from './DropDown.module.scss';

// eslint-disable-next-line react/prop-types
export const DropDown = ({ isOpen = false }) => {
  return (
    <div className={styles.dropdown}>
      {isOpen ? (
        <div className={styles.dropdown_menu}>
          {items?.map((item, key) => (
            <div key={key} className={styles.dropdown_menu_menuItem}>
              {item.name}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

