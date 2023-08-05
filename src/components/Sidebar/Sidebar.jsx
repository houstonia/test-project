import { sidebarElems } from './constants';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {sidebarElems.map((i, ind) => (
        <div className={styles.sidebar_chapt} key={ind}>
          <p className={styles.sidebar_chapt_title}>{i.title}</p>
          {i.items.map((item, key) => (
            <p className={styles.sidebar_chapt_items} key={key}>
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
