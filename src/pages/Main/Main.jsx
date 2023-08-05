import { Button, Input, Message, Sidebar, Table, Title } from '@components';
import { createDataAsync } from '@store/features/data/dataSlice';
import { calcExamRes } from '@utils/helpers/calcHelpers';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import styles from './Main.module.scss';

const schema = yup.object().shape({
  missedDisrespectfulReason: yup
    .number()
    .min(
      0,
      'Количество пропущенных по неуважительной причине должно быть неотрицательным числом'
    )
    .required(
      'Поле "количество пропущенных занятий по неуважительной причине" является обязательным'
    )
    .typeError(
      'Поле "количество пропущенных занятий по неуважительной причине"  не должно быть пустым'
    ),
  grades: yup
    .array()
    .of(
      yup
        .number()
        .required('Заполните все поля оценок')
        .min(2, 'Минимальное значение оценки "2"')
        .max(5, 'Максимальное значение оценки "5"')
        .typeError('Заполните все поля оценок')
    ),
  scoreCount: yup
    .number()
    .min(0, 'Минимальное количество оценок - "0" ')
    .required('Поле "количество оценок" является обязательным')
    .typeError('Поле "количество оценок" не должно быть пустым'),
  subject: yup
    .string()
    .trim()
    .min(2, 'Введите корректное название предмета')
    .matches(/^[a-zа-я]+$/gi, 'Введите корректное название предмета')
    .required('Поле "предмет" является обязательным')
    .typeError('Поле "предмет" не должно быть пустым'),
});

export const Main = () => {
  const dispatch = useDispatch();
  const [inp, setInp] = useState({});
  const [examInfo, setExamInfo] = useState(undefined);
  const [dataError, setDataError] = useState([]);

  const handleSave = (e) => {
    setInp({ ...inp, grades: e });
  };
  const handleInputChange = (event) => {
    setInp({ ...inp, [event.target.name]: event.target.value });
  };
  const handleClick = () => {
    schema
      .validate(inp)
      .then((validValue) => {
        setDataError([]);
        const results = calcExamRes(inp?.grades, inp.missedDisrespectfulReason);
        setExamInfo(results);
        dispatch(createDataAsync({ ...validValue, results }));
      })
      .catch((error) => {
        setDataError(error.errors);
        setExamInfo(undefined);
      });
  };

  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.main_content}>
        <Title name="Предмет" />
        <Input
          name="subject"
          placeholder="введите предмет"
          value={inp.subject}
          onChange={handleInputChange}
        />
        <Title name="Количество оценок " />

        <Input
          name="scoreCount"
          placeholder="0"
          value={inp.scoreCount}
          onChange={handleInputChange}
          type="number"
        />
        {inp.scoreCount > 0 ? <Title name="Оценки:" /> : ''}
        <Table cellCount={inp.scoreCount} onSave={handleSave} />
        <Title name="Пропущенные занятия по неуважительной причине:" />
        <Input
          name="missedDisrespectfulReason"
          placeholder="0"
          value={inp.missedDisrespectfulReason}
          onChange={handleInputChange}
          type="number"
        />
        <div
          className={`${styles.main_content_error} ${
            dataError.length === 1 ? styles.main_content_error_appear : ''
          }`}
        >
          {dataError.map((i) => i)}
        </div>
        <Button text="Проверить" onClick={handleClick} />
        <Message message={examInfo} />
      </div>
      <Sidebar />
    </div>
  );
};
