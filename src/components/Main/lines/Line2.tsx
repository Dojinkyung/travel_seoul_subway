import cx from 'classnames'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { items } from './Lines'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line2 = (props: propsType) => {
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
    <div className={cx({ [styles.unSelected]: selected !== '2', [styles.selected]: selected === '2' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg2.png'
        alt='2호선'
        id='2'
        width='1650'
        height='1325'
        useMap='#imgmap_sg2'
      />
      <map name='imgmap_sg2'>
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
export default Line2
