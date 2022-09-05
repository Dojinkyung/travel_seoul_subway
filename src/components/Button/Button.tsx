import { useState } from 'react'
import styles from './button.module.scss'

const Btn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openReq = () => {
    setIsOpen(true)
  }
  const closeReq = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <button className={styles.subBtn} aria-label='station button' type='button' onClick={openReq} />
      {/* {isOpen ? <Modal open={isOpen} close={closeReq} /> : null} */}
      //TODO: area태그 알아보고 이용하기 http://www.tcpschool.com/html-tag-attrs/area-coords
    </div>
  )
}
export default Btn
