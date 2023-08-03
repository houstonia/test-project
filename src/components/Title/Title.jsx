
import styles from './Title.module.scss';

export const Title =({name='Title'})=>{
  return <p className={styles.title}>{name}</p>;
};