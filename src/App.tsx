import { Field } from './components/Field/Field';
import { Select } from './components/Select/Select';
import { History } from './components/History/History';
import './App.scss';
import { useContext, useEffect, useState } from 'react';
import { FieldContext } from './context/FieldContext';
import { Option } from './types/Option';
import axios from 'axios';

export const App = () => {
  const { isStarted } = useContext(FieldContext);
  const [options, setOptions] = useState<Option[]>([]);
  const [error, setError] = useState('');

  const loadData = async () => {
    try {
      const data = (await axios.get("https://60816d9073292b0017cdd833.mockapi.io/modes")).data;

      setOptions(data);
    } catch (e) {
      setError('Unable to load data')
      console.error(e);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1 className='heading'>StarNavi: Test task</h1>

      <div className="app__container">
        <div className='field__container'>
          {error 
            ? <p className='select--error'>{error}</p>
            : <Select options={options}/>
            }
          <Field/>
        </div>

        {isStarted && <History />}
      </div>
    </>
  );
}
