import { Cords } from '../../types/Cords'
import './CordsInfo.scss'

export const CordsInfo = (
  { cords }: {cords: Cords}
) => {
  return (
    <div className='cords__container'>
      <p className='cords__text'>Row - {cords.x} Column - {cords.y}</p>
    </div>
  )
}
