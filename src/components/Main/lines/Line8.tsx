import cx from 'classnames'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line8 = (props: propsType) => {
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '8', [styles.selected]: selected === '8' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg8.png'
        alt='8호선'
        id='8'
        width='1650'
        height='1325'
        useMap='#imgmap_sg8'
      />
    </div>
  )
}
export default Line8
