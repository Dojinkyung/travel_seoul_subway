import { useState } from 'react'
import { useSelector } from 'react-redux'

import Modal from '../modal/Modal'
import styles from './subway.module.scss'
import { items } from '../../../data/Lines'
import { getTrainId } from '../../../redux/slice'

const Subway = () => {
  const selected = useSelector(getTrainId)
  const [station, setStation] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const closeReq = () => {
    setIsOpen(false)
  }
  const handleStation = (event: any) => {
    setStation(event.target.title)
    setIsOpen(true)
  }

  return (
    <div className={styles.image}>
      <img
        useMap={`#imgmap_sg${selected}`}
        src={`https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg${selected}.png`}
        alt={`${selected}호선`}
        id={`${selected}`}
        className={styles.subwayTrain}
        width='1650'
        height='1325'
      />
      <map name={`#imgmap_sg${selected}`}>
        {items[Number(selected) - 1].map((item) => {
          return (
            <area
              key={item.Key}
              shape='circle'
              coords={item.Coords}
              href='#'
              title={item.Title}
              alt={item.Title}
              onClick={handleStation}
            />
          )
        })}
      </map>
      {isOpen ? <Modal selectedLine={selected} open={isOpen} close={closeReq} item={station} /> : null}
    </div>
  )
}
export default Subway
