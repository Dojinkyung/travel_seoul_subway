import cx from 'classnames'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line5 = (props: propsType) => {
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '5', [styles.selected]: selected === '5' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg5.png'
        alt='5호선'
        id='5'
        width='1650'
        height='1325'
        useMap='#imgmap_sg5'
      />
    </div>
  )
}
export default Line5
