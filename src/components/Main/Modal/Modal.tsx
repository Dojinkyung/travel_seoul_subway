import cx from 'classnames'
import { X } from '../../../assets/svgs'
import Map from '../../Map/MapContainer'

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
  const colors = ['#5856d6', '#34c759']
  return (
    <div className={cx({ [styles.bg]: open })} onClick={handleClickOutside} aria-hidden>
      <div className={cx({ [styles.modalActive]: open })}>
        <button type='button' className={styles.btn} onClick={close}>
          <X />
        </button>
        <div className={styles.area} onClick={handleModalContent} aria-hidden>
          <div className={styles.station}>
            <div className={styles.line} style={{ backgroundColor: colors[parseInt(selectedLine, 10) - 1] }} />
            <div
              className={cx({ [styles.circle]: open })}
              style={{ borderColor: colors[parseInt(selectedLine, 10) - 1] }}
            >
              <p className={styles.info}>{item}</p>
            </div>
            <div className={styles.line} style={{ backgroundColor: colors[parseInt(selectedLine, 10) - 1] }} />
          </div>
          <Map searchKeyword={`${item}역`} />
        </div>
      </div>
    </div>
  )
}
export default Modal
