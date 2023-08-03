/* eslint-disable react/prop-types */
import { memo } from 'react';

import styles from './Input.module.scss';

const InputComponent = ({
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

export const Input =memo(InputComponent);
