import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../../store/features/data/dataSlice';
import { ResultsItem } from '../ResultsItem/ResultsItem';
import styles from './ResultsList.module.scss';

export const ResultsList = () => {
  const dispatch = useDispatch();
  const  data  = useSelector((state) => state.data.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={styles.resultsList}>
      <h1>Результаты</h1>
      {data?.map((item, key) => (
        <ResultsItem key={key} item={item} />
      ))}
    </div>
  );
};
