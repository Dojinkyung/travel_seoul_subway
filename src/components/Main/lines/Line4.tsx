import cx from 'classnames'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line4 = (props: propsType) => {
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '4', [styles.selected]: selected === '4' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg4.png'
        alt='4호선'
        id='4'
        width='1650'
        height='1325'
        useMap='#imgmap_sg4'
      />
    </div>
  )
}
export default Line4
