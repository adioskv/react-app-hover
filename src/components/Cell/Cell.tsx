import { useContext } from 'react'
import './Cell.scss'
import classNames from 'classnames'
import { ActiveContext } from '../../context/ActiveContext';
import { Cords } from '../../types/Cords';

export const Cell = (
  { cellCords }: {cellCords: Cords}
) => {
  const { activeCells, setActiveCells} = useContext(ActiveContext);

  const handleHover = () => {
    console.log('Hover');
    if (isActive) {
      setActiveCells(prevCells => prevCells.filter(cords => !(cords.x === cellCords.x && cords.y === cellCords.y)));
    } else {
      setActiveCells(prevCells => [...prevCells, cellCords]);
    }
  }

  const isActive = activeCells.find(cords => cords.x === cellCords.x && cords.y === cellCords.y);

  return (
    <div 
      onMouseEnter={handleHover}
      className={classNames(
        'cell',
        {
          "is-active": isActive
        }
      )}
    />
  )
}
