import cx from 'classnames'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line3 = (props: propsType) => {
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '3', [styles.selected]: selected === '3' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg3.png'
        alt='3호선'
        id='3'
        width='1650'
        height='1325'
        useMap='#imgmap_sg3'
      />
    </div>
  )
}
export default Line3
