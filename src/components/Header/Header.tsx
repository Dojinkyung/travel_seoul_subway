import styles from './Header.module.scss'
import Dropdown from './DropDown/DropDown'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>어디까지 가봤니?</h1>
      <Dropdown />
    </div>
  )
}

export default Header
