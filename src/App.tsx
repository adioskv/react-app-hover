import { Field } from './components/Field/Field';
import { Select } from './components/Select/Select';
import { History } from './components/History/History';
import './App.scss';
import { useContext } from 'react';
import { FieldContext } from './context/FieldContext';

export const App = () => {

  const { isStarted } = useContext(FieldContext);

  return (
    <>
      <h1 className='heading'>StarNavi: Test task</h1>

      <div className="app__container">
        <div className='field__container'>
          <Select/>
          <Field/>
        </div>

        {isStarted && <History />}
      </div>
    </>
  );
}
