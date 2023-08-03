/* eslint-disable react/prop-types */
import styles from './Message.module.scss';

export const Message = ({ message }) => {
  return (
    <div
      className={`${styles.message} ${
        message ? (message?.isPassed ? styles.success : styles.error) : ''
      }`}
    >
      {message ? (
        <>
          {message?.isPassed ? <p>Зачет сдан</p> : <p>Зачет не сдан</p>}
          <p>Средний балл равен {message?.averageGrade}</p>
        </>
      ) : null}
    </div>
  );
};
