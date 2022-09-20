import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTrainId } from '../../../redux/slice'
import Modal from '../Modal/Modal'
import { items } from '../Subway/Lines'
import styles from './subwayMobile.module.scss'

const SubwayMobile = () => {
  const selected = useSelector(getTrainId)
  const [station, setStation] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const closeReq = () => {
    setIsOpen(false)
  }
  const handleStation = (event: any) => {
    setStation(event.target.id)
    setIsOpen(true)
  }
  const colors = ['	#0052A4', '#009D3E', '#EF7C1C', '#00A5DE', '#996CAC', '#CD7C2F', '#747F00', '#EA545D', '#BB8336']
  return (
    <div className={styles.subwayListsWrap}>
      <ul className={styles.subwayList}>
        {items[Number(selected) - 1].map((item) => {
          return (
            <button key={item.Key} type='button' onClick={handleStation} className={styles.subwayElement}>
              <li className={styles.station}>
                <div
                  className={styles.circle}
                  id={item.Title}
                  style={{ borderColor: colors[parseInt(selected, 10) - 1] }}
                >
                  <h1 className={styles.info} id={item.Title}>
                    {item.Title}역
                  </h1>
                </div>
              </li>
            </button>
          )
        })}
      </ul>
      {isOpen ? <Modal selectedLine={selected} open={isOpen} close={closeReq} item={station} /> : null}
    </div>
  )
}
export default SubwayMobile
