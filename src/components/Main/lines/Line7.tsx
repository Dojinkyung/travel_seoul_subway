import cx from 'classnames'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line7 = (props: propsType) => {
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '7', [styles.selected]: selected === '7' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg7.png'
        alt='7호선'
        id='7'
        width='1650'
        height='1325'
        useMap='#imgmap_sg7'
      />
    </div>
  )
}
export default Line7
