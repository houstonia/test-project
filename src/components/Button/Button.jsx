
import styles from './Button.module.scss';

export const Button =({text='Button',onClick=(()=>{})})=>{
  return <button className={styles.button} onClick={onClick}>{text}</button>;
};