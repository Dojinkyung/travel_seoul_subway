import cx from 'classnames'
import styles from './modal.module.scss'

interface props {
  item: string
  open: boolean
  close: () => void
}

const Modal = (props: props) => {
  const { open, close, item } = props

  const handleClickOutside = () => {
    close()
  }
  const handleModalContent = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
  }

  return (
    <div className={cx({ [styles.bg]: open })} onClick={handleClickOutside} aria-hidden>
      <div className={cx({ [styles.modalActive]: open })}>
        <div className={styles.area} onClick={handleModalContent} aria-hidden>
          <p className={styles.info}>{item} 역</p>
          <button type='button' className={styles.btn} onClick={close}>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}
export default Modal
