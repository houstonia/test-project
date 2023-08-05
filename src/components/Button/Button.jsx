import styles from './Button.module.scss';

// eslint-disable-next-line react/prop-types
export const Button = ({ text = 'Button', onClick = () => {} }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
