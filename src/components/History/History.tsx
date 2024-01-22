import React, { useContext } from 'react'
import { ActiveContext } from '../../context/ActiveContext'
import { CordsInfo } from '../CordsInfo/CordsInfo';
import './History.scss'

export const History = () => {
  const { activeCells } = useContext(ActiveContext);
  
  return (
    <div className='history__container'>
      <h2>Hover squares</h2>
      <div className='history__container--info'>
        {activeCells.map(cords => <CordsInfo cords={cords} key={`${cords.x}-${cords.y}`}/>)}
      </div>
    </div>
  )
}
