import Dropdown from '../dropdown/Dropdown'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>어디까지 먹어봤니?</h1>
      <Dropdown />
    </div>
  )
}

export default Header
