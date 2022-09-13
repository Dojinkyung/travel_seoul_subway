import cx from 'classnames'
import { X } from '../../../assets/svgs'

import styles from './modal.module.scss'

interface props {
  selectedLine: string
  item: string
  open: boolean
  close: () => void
}
const Modal = (props: props) => {
  const { selectedLine, open, close, item } = props
  const handleClickOutside = () => {
    close()
  }
  const handleModalContent = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
  }

  return (
    <div className={cx({ [styles.bg]: open })} onClick={handleClickOutside} aria-hidden>
      <div className={cx({ [styles.modalActive]: open })}>
        <button type='button' className={styles.btn} onClick={close}>
          <X />
        </button>
        <div className={styles.area} onClick={handleModalContent} aria-hidden>
          <div className={styles.station}>
            <div className={styles.line} />
            <div className={cx({ [styles.circle]: open })}>
              <p className={styles.info}>
                {item}
                {selectedLine}
              </p>
            </div>
            <div className={styles.line} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
