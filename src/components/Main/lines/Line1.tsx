import cx from 'classnames'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { items } from './Lines'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line1 = (props: propsType) => {
  const { selected } = props
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
    <div className={cx({ [styles.unSelected]: selected !== '1', [styles.selected]: selected === '1' })}>
      <img
        useMap='#imgmap_sg1'
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg1.png'
        alt='1호선'
        id='1'
        width='1650'
        height='1325'
      />
      <map name='#imgmap_sg1'>
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
export default Line1
