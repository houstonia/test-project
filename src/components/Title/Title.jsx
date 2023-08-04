/* eslint-disable react/prop-types */

import styles from './Title.module.scss';

export const Title =({name='Title'})=>{
  return <p className={styles.title}>{name}</p>;
};