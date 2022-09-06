import cx from 'classnames'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line9 = (props: propsType) => {
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '9', [styles.selected]: selected === '9' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg9.png'
        alt='9호선'
        id='9'
        width='1650'
        height='1325'
        useMap='#imgmap_sg9'
      />
    </div>
  )
}
export default Line9
