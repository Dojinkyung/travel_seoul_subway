import cx from 'classnames'
import { useSelector } from 'react-redux'
import { getTrainId } from '../../redux/slice'
import styles from './subway.module.scss'

const Subway = () => {
  const selected = useSelector(getTrainId)
  console.log(selected)
  return (
    <div>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg1.png'
        alt='1호선'
        className={cx({ [styles.unSelected]: selected !== '1', [styles.selected]: selected === '1' })}
        id='1'
      />
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg2.png'
        alt='2호선'
        className={cx({ [styles.unSelected]: selected !== '2', [styles.selected]: selected === '2' })}
        id='2'
      />
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg3.png'
        alt='3호선'
        className={cx({ [styles.unSelected]: selected !== '3', [styles.selected]: selected === '3' })}
        id='3'
      />
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg4.png'
        alt='4호선'
        className={cx({ [styles.unSelected]: selected !== '4', [styles.selected]: selected === '4' })}
        id='4'
      />
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg5.png'
        alt='5호선'
        className={cx({ [styles.unSelected]: selected !== '5', [styles.selected]: selected === '5' })}
        id='5'
      />
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg6.png'
        alt='6호선'
        className={cx({ [styles.unSelected]: selected !== '6', [styles.selected]: selected === '6' })}
        id='6'
      />
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg7.png'
        alt='7호선'
        className={cx({ [styles.unSelected]: selected !== '7', [styles.selected]: selected === '7' })}
        id='7'
      />
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg8.png'
        alt='8호선'
        className={cx({ [styles.unSelected]: selected !== '8', [styles.selected]: selected === '8' })}
        id='8'
      />
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg9.png'
        alt='9호선'
        className={cx({ [styles.unSelected]: selected !== '9', [styles.selected]: selected === '9' })}
        id='9'
      />
    </div>
  )
}

export default Subway
