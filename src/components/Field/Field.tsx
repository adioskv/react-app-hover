import { useContext } from 'react'
import { Cell } from '../Cell/Cell'
import './Field.scss'
import { FieldContext } from '../../context/FieldContext'

export const Field = () => {
  const { fields, isStarted } = useContext(FieldContext);

  const generateCells = (squareLen: number) => {
    const field = [];

    for (let rows = 0; rows < squareLen; rows++) {
      const row = [];

      for (let cols = 0; cols < squareLen; cols++) {
        row.push(
          <Cell cellCords={{x: rows, y: cols}} key={`${rows}-${cols}`}/>
        )  
      }

      field.push(
        <div className="field__row" key={rows}>
          {row.map(cell => cell)}
        </div>
      );
    }

    return field;
  }


  return (
    <div className='field'>
      {(isStarted && fields) && generateCells(fields)}
    </div> 
  )
}
