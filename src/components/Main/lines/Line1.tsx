import cx from 'classnames'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line1 = (props: propsType) => {
  const [station, setStation] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const closeReq = () => {
    setIsOpen(false)
  }
  const handleStation = (event: any) => {
    setStation(event.target.title)
    setIsOpen(true)
  }
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '1', [styles.selected]: selected === '1' })}>
      <img
        useMap='#imgmap_sg1'
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg1.png'
        alt='1호선'
        id='1'
        width='1650'
        height='1325'
      />
      <map name='#imgmap_sg1'>
        <area shape='circle' coords='614,146,6' href='#' title='소요산' alt='소요산' onClick={handleStation} />
        <area shape='circle' coords='655,145,6' href='#' title='동두천' alt='동두천' onClick={handleStation} />
        <area shape='circle' coords='698,145,7' href='#' title='보산' alt='보산' onClick={handleStation} />
        <area
          shape='circle'
          coords='739,145,6'
          href='#'
          title='동두천 중앙'
          alt='동두천 중앙'
          onClick={handleStation}
        />
        <area shape='circle' coords='782,145,6' href='#' title='지행' alt='지행' onClick={handleStation} />
        <area shape='circle' coords='825,146,6' href='#' title='덕정' alt='덕정' onClick={handleStation} />
        <area shape='circle' coords='868,145,7' href='#' title='덕계' alt='덕계' onClick={handleStation} />
        <area shape='circle' coords='909,145,5' href='#' title='양주' alt='양주' onClick={handleStation} />
        <area shape='circle' coords='951,145,6' href='#' title='녹양' alt='녹양' onClick={handleStation} />
        <area shape='circle' coords='995,146,6' href='#' title='가능' alt='가능' onClick={handleStation} />
        <area shape='circle' coords='1043,146,6' href='#' title='의정부' alt='의정부' onClick={handleStation} />
        <area shape='circle' coords='1082,145,6' href='#' title='회룡' alt='회룡' onClick={handleStation} />
        <area shape='circle' coords='1125,146,6' href='#' title='망월사' alt='망월사' onClick={handleStation} />
        <area shape='circle' coords='1171,146,6' href='#' title='도봉산' alt='도봉산' onClick={handleStation} />
        <area shape='circle' coords='1209,184,6' href='#' title='도봉' alt='도봉' onClick={handleStation} />
        <area shape='circle' coords='1209,221,6' href='#' title='방학' alt='방학' onClick={handleStation} />
        <area shape='circle' coords='1209,259,6' href='#' title='창동' alt='창동' onClick={handleStation} />
        <area shape='circle' coords='1209,276,6' href='#' title='녹천' alt='녹천' onClick={handleStation} />
        <area shape='circle' coords='1209,291,6' href='#' title='월계' alt='월계' onClick={handleStation} />
        <area shape='circle' coords='1209,308,6' href='#' title='광운대' alt='광운대' onClick={handleStation} />
        <area shape='circle' coords='1208,328,6' href='#' title='석계' alt='석계' onClick={handleStation} />
        <area shape='circle' coords='1203,372,6' href='#' title='신이문' alt='신이문' onClick={handleStation} />
        <area shape='circle' coords='1176,388,6' href='#' title='외대앞' alt='외대앞' onClick={handleStation} />
        <area shape='circle' coords='1137,394,7' href='#' title='회기' alt='회기' onClick={handleStation} />
        <area shape='circle' coords='1101,396,9' href='#' title='청량리' alt='청량리' onClick={handleStation} />
        <area shape='circle' coords='1036,389,6' href='#' title='제기동' alt='제기동' onClick={handleStation} />
        <area shape='circle' coords='975,389,7' href='#' title='신설동' alt='신설동' onClick={handleStation} />
        <area shape='circle' coords='923,386,6' href='#' title='동묘앞' alt='동묘앞' onClick={handleStation} />
        <area shape='circle' coords='867,386,6' href='#' title='동대문' alt='동대문' onClick={handleStation} />
        <area shape='circle' coords='831,388,6' href='#' title='종로5가' alt='종로5가' onClick={handleStation} />
        <area shape='circle' coords='798,390,8' href='#' title='종로3가' alt='종로3가' onClick={handleStation} />
        <area shape='circle' coords='754,400,6' href='#' title='종각' alt='종각' onClick={handleStation} />
        <area shape='circle' coords='741,445,6' href='#' title='시청' alt='시청' onClick={handleStation} />
        <area shape='circle' coords='739,543,11' href='#' title='서울' alt='서울' onClick={handleStation} />
        <area shape='circle' coords='742,608,6' href='#' title='남영' alt='남영' onClick={handleStation} />
        <area shape='circle' coords='742,644,6' href='#' title='용산' alt='용산' onClick={handleStation} />
        <area shape='circle' coords='739,710,6' href='#' title='노량진' alt='노량진' onClick={handleStation} />
        <area shape='circle' coords='697,726,6' href='#' title='대방' alt='대방' onClick={handleStation} />
        <area shape='circle' coords='650,726,6' href='#' title='신길' alt='신길' onClick={handleStation} />
        <area shape='circle' coords='606,729,6' href='#' title='영등포' alt='영등포' onClick={handleStation} />
        <area shape='circle' coords='561,722,6' href='#' title='신도림' alt='신도림' onClick={handleStation} />
        <area shape='circle' coords='538,729,6' href='#' title='구로' alt='구로' onClick={handleStation} />
        <area shape='circle' coords='492,730,6' href='#' title='구일' alt='구일' onClick={handleStation} />
        <area shape='circle' coords='455,729,6' href='#' title='개봉' alt='개봉' onClick={handleStation} />
        <area shape='circle' coords='412,742,6' href='#' title='오류동' alt='오류동' onClick={handleStation} />
        <area shape='circle' coords='401,790,6' href='#' title='온수' alt='온수' onClick={handleStation} />
        <area shape='circle' coords='403,825,6' href='#' title='역곡' alt='역곡' onClick={handleStation} />
        <area shape='circle' coords='376,852,6' href='#' title='소사' alt='소사' onClick={handleStation} />
        <area shape='circle' coords='354,853,6' href='#' title='부천' alt='부천' onClick={handleStation} />
        <area shape='circle' coords='333,851,6' href='#' title='중동' alt='중동' onClick={handleStation} />
        <area shape='circle' coords='311,852,6' href='#' title='송내' alt='송내' onClick={handleStation} />
        <area shape='circle' coords='290,852,6' href='#' title='부개' alt='부개' onClick={handleStation} />
        <area shape='circle' coords='264,852,6' href='#' title='부평' alt='부평' onClick={handleStation} />
        <area shape='circle' coords='239,859,6' href='#' title='백운' alt='백운' onClick={handleStation} />
        <area shape='circle' coords='226,873,6' href='#' title='동암' alt='동암' onClick={handleStation} />
        <area shape='circle' coords='221,896,6' href='#' title='간석' alt='간석' onClick={handleStation} />
        <area shape='circle' coords='221,924,6' href='#' title='주안' alt='주안' onClick={handleStation} />
        <area shape='circle' coords='222,949,6' href='#' title='도화' alt='도화' onClick={handleStation} />
        <area shape='circle' coords='220,972,6' href='#' title='제물포' alt='제물포' onClick={handleStation} />
        <area shape='circle' coords='221,997,6' href='#' title='도원' alt='도원' onClick={handleStation} />
        <area shape='circle' coords='221,1024,6' href='#' title='동인천' alt='동인천' onClick={handleStation} />
        <area shape='circle' coords='221,1049,6' href='#' title='인천' alt='인천' onClick={handleStation} />
        <area
          shape='circle'
          coords='513,790,6'
          href='#'
          title='가산디지털단지'
          alt='가산디지털단지'
          onClick={handleStation}
        />
        <area shape='circle' coords='512,834,6' href='#' title='독산' alt='독산' onClick={handleStation} />
        <area shape='circle' coords='512,879,6' href='#' title='금천구청' alt='금천구청' onClick={handleStation} />
        <area shape='circle' coords='492,917,6' href='#' title='광명' alt='광명' onClick={handleStation} />
        <area shape='circle' coords='530,918,6' href='#' title='석수' alt='석수' onClick={handleStation} />
        <area shape='circle' coords='567,925,6' href='#' title='관악' alt='관악' onClick={handleStation} />
        <area shape='circle' coords='605,924,6' href='#' title='안양' alt='안양' onClick={handleStation} />
        <area shape='circle' coords='643,938,6' href='#' title='명학' alt='명학' onClick={handleStation} />
        <area shape='circle' coords='652,974,6' href='#' title='금정' alt='금정' onClick={handleStation} />
        <area shape='circle' coords='653,1013,6' href='#' title='군포' alt='군포' onClick={handleStation} />
        <area shape='circle' coords='654,1052,6' href='#' title='당정' alt='당정' onClick={handleStation} />
        <area shape='circle' coords='653,1092,6' href='#' title='의왕' alt='의왕' onClick={handleStation} />
        <area shape='circle' coords='653,1130,6' href='#' title='성균관대' alt='성균관대' onClick={handleStation} />
        <area shape='circle' coords='662,1173,6' href='#' title='화서' alt='화서' onClick={handleStation} />
        <area shape='circle' coords='693,1194,6' href='#' title='수원' alt='수원' onClick={handleStation} />
        <area shape='circle' coords='731,1194,7' href='#' title='세류' alt='세류' onClick={handleStation} />
        <area shape='circle' coords='770,1193,7' href='#' title='병점' alt='병점' onClick={handleStation} />
        <area shape='circle' coords='798,1166,6' href='#' title='서동탄' alt='서동탄' onClick={handleStation} />
        <area shape='circle' coords='813,1194,6' href='#' title='세마' alt='세마' onClick={handleStation} />
        <area shape='circle' coords='855,1192,6' href='#' title='오산대' alt='오산대' onClick={handleStation} />
        <area shape='circle' coords='896,1192,6' href='#' title='오산' alt='오산' onClick={handleStation} />
        <area shape='circle' coords='938,1193,6' href='#' title='진위' alt='진위' onClick={handleStation} />
        <area shape='circle' coords='980,1193,6' href='#' title='송탄' alt='송탄' onClick={handleStation} />
        <area shape='circle' coords='1022,1193,6' href='#' title='서정리' alt='서정리' onClick={handleStation} />
        <area shape='circle' coords='1064,1193,6' href='#' title='평택지제' alt='평택지제' onClick={handleStation} />
        <area shape='circle' coords='1106,1193,6' href='#' title='평택' alt='평택' onClick={handleStation} />
        <area shape='circle' coords='1148,1194,6' href='#' title='성환' alt='성환' onClick={handleStation} />
        <area shape='circle' coords='1190,1193,6' href='#' title='직산' alt='직산' onClick={handleStation} />
        <area shape='circle' coords='1232,1193,6' href='#' title='두정' alt='두정' onClick={handleStation} />
        <area shape='circle' coords='1274,1193,6' href='#' title='천안' alt='천안' onClick={handleStation} />
        <area shape='circle' coords='1316,1193,6' href='#' title='봉명' alt='봉명' onClick={handleStation} />
        <area
          shape='circle'
          coords='1358,1193,6'
          href='#'
          title='쌍용(나사렛대)'
          alt='쌍용(나사렛대)'
          onClick={handleStation}
        />
        <area shape='circle' coords='1400,1193,6' href='#' title='아산' alt='아산' onClick={handleStation} />
        <area shape='circle' coords='1442,1193,6' href='#' title='탕정' alt='탕정' onClick={handleStation} />
        <area shape='circle' coords='1483,1192,6' href='#' title='배방' alt='배방' onClick={handleStation} />
        <area shape='circle' coords='1512,1181,6' href='#' title='온양온천' alt='온양온천' onClick={handleStation} />
        <area
          shape='circle'
          coords='1522,1155,6'
          href='#'
          title='신창(순천향대)'
          alt='신창(순천향대)'
          onClick={handleStation}
        />
      </map>
      {isOpen ? <Modal open={isOpen} close={closeReq} item={station} /> : null}
    </div>
  )
}
export default Line1
