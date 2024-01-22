import { useContext, useState } from 'react'
import { Option } from '../../types/Option';
import './Select.scss'
import classNames from 'classnames';
import { FieldContext } from '../../context/FieldContext';
import { ActiveContext } from '../../context/ActiveContext';

export const Select = ({ options } : {options: Option[]}) => {
  const { fields, setFields, isStarted, setIsStarted } = useContext(FieldContext);
  const { setActiveCells } = useContext(ActiveContext);
  const [error, setError] = useState('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setError('')
    setFields(+e.target.value);
    setActiveCells([]);
  }

  const handleButtonClick = () => {
    if (!fields) {
      setError('Please, select option')
      return;
    }
    setIsStarted(status => {
      if (status) {
        setActiveCells([]);
      }

      return !status;
    });
  };

  return (
    <div className='select__container'>
      <select 
        onChange={handleSelectChange}
        className='select'
        defaultValue={'null'}
      >
        <option 
          value={'null'}
          disabled
        >
          Pick mode
        </option>

        {options.map((option: Option) => (
          <option value={option.field} key={option.id}>{option.name}</option>
        ))}
      </select>

      <button 
        className={classNames(
          'button',
          {
            'is-active': isStarted
          }
          )}
        onClick={handleButtonClick}
      >
        {isStarted ? 'stop' : 'start'}
      </button>

      {error && <p className='select--error'>{error}</p>}
    </div>
  )
}
