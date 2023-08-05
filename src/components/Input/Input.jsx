/* eslint-disable react/prop-types */
import styles from './Input.module.scss';

export const Input = ({
  name = '',
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
}) => {
  return (
    <div className={`${styles.input} ${type === 'number'? styles.input_num:''}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};