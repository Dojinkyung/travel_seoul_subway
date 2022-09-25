import cx from 'classnames'
import { X } from '../../../assets/svgs'
import Map from '../map/MapContainer'
import styles from './modal.module.scss'

interface props {
  selectedLine: string
  open: boolean
  close: () => void
  item: string
}
const Modal = (props: props) => {
  const { selectedLine, open, close, item } = props
  const handleClickOutside = () => {
    close()
  }
  const selected = parseInt(selectedLine, 10)
  const handleModalContent = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
  }
  const colors = ['	#0052A4', '#009D3E', '#EF7C1C', '#00A5DE', '#996CAC', '#CD7C2F', '#747F00', '#EA545D', '#BB8336']
  return (
    <div className={cx({ [styles.bg]: open })} onClick={handleClickOutside} aria-hidden>
      <div className={cx({ [styles.modalActive]: open })}>
        <button type='button' className={styles.btn} onClick={close}>
          <X />
        </button>
        <div className={styles.area} onClick={handleModalContent} aria-hidden>
          <header className={styles.station}>
            <div className={styles.line} style={{ backgroundColor: colors[selected - 1] }} />
            <div className={cx({ [styles.circle]: open })} style={{ borderColor: colors[selected - 1] }}>
              <h1 className={styles.info}>{item}역</h1>
            </div>
            <div className={styles.line} style={{ backgroundColor: colors[selected - 1] }} />
          </header>
          <main className={styles.map}>
            <Map searchKeyword={`${item}역 맛집`} />
          </main>
        </div>
      </div>
    </div>
  )
}
export default Modal
