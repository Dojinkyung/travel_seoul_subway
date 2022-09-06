import cx from 'classnames'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line6 = (props: propsType) => {
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '6', [styles.selected]: selected === '6' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg6.png'
        alt='6호선'
        className={cx({ [styles.unSelected]: selected !== '6', [styles.selected]: selected === '6' })}
        id='6'
        width='1650'
        height='1325'
        useMap='#imgmap_sg6'
      />
    </div>
  )
}
export default Line6
