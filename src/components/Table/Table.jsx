
import  { memo, useMemo, useState } from 'react';

import {Input} from '../Input';
import styles from './Table.module.scss';

function getArrOfEmptyScore(scoreCount,setState){
  if(scoreCount>0){
    const length = parseInt(scoreCount, 10);
    const filledArray=Array(length).fill('');
    setState(filledArray);
    return filledArray;
  }
  return [];
}
// eslint-disable-next-line react/prop-types
const TableComp = ({ onSave, cellCount }) => {
  const [results, setResults] = useState([]);
  const arr=useMemo(()=>getArrOfEmptyScore(cellCount,setResults),[cellCount]);

  const handleChange=(event,index)=>{
    const newResults = [...results];
    newResults[index] = event.target.value;
    setResults(newResults);
    onSave(newResults);  
  };

  return (
    <div className={styles.table}>
      {arr.map((i,key)=>
        <Input
          key={key}
          type="number"
          value={results[key]}
          onChange={(event) => handleChange(event, key)}
        />)}
    </div>
  );
};
export const Table=memo(TableComp);

