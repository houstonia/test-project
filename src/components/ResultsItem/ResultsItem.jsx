/* eslint-disable react/prop-types */
import Close from '@assets/icons/close.svg';
import DownArrow from '@assets/icons/down-arrow.svg';
import UpArrow from '@assets/icons/up-arrow.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteData } from '../../store/features/data/dataSlice';
import { calcGradesCount } from '../../utils/helpers/calcHelpers';
import styles from './ResultsItem.module.scss';

export const ResultsItem = ({ item }) => {
  const [view, setView] = useState(false);
  const [grades,setGrades]=useState([]);
  const clickArrow = () => {
    setGrades(calcGradesCount(item?.grades));
    setView(!view);
  };
  const clickClose = () => {
    dispatch(deleteData(item.id));
  };
  const dispatch = useDispatch();
  return (
    <div className={styles.resultsItem}>

      <div className={styles.resultsItem_top}  onClick={clickArrow} >
        <img src={`${view ? DownArrow : UpArrow}`}/>
        <div className={styles.resultsItem_top_info}>
          <p>Предмет : {item.subject}</p>
          <p>{item?.results?.isPassed ? 'Зачтено' : 'Не зачтено'}</p>   
        </div>
        <img
          className={styles.resultsItem_top_close}
          src={Close}
          onClick={clickClose}
        />
      </div>
      {view && (
        <div className={styles.resultsItem_bottom}>
          <p>Количество пропущенных занятий: {item?.missedDisrespectfulReason}</p>
          <p>Средний балл: {item?.results?.averageGrade}</p>
          <div>
            <p>Оценки:</p>
            { grades?.map(({count, element}) => (
              // eslint-disable-next-line react/no-unescaped-entities
              <p key={element}> "{element}"- {count}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
