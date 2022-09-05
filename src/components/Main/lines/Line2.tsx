import cx from 'classnames'
import styles from './subway.module.scss'

interface propsType {
  selected: string
}
const Line2 = (props: propsType) => {
  const { selected } = props
  return (
    <div className={cx({ [styles.unSelected]: selected !== '2', [styles.selected]: selected === '2' })}>
      <img
        src='https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg2.png'
        alt='2호선'
        id='2'
        width='1650'
        height='1325'
        useMap='#imgmap_sg2'
      />
      <map name='imgmap_sg2'>
        <area shape='circle' coords='975,389,7' href='#' title='신설동' alt='신설동' />
        <area shape='circle' coords='1008,394,6' href='#' title='용두' alt='용두' />
        <area shape='circle' coords='1094,427,7' href='#' title='신답' alt='신답' />
        <area shape='circle' coords='1094,482,6' href='#' title='용답' alt='용답' />
        <area shape='circle' coords='1091,537,6' href='#' title='성수' alt='성수' />
        <area shape='circle' coords='1092,582,6' href='#' title='건대입구' alt='건대입구' />
        <area shape='circle' coords='1089,613,6' href='#' title='구의' alt='구의' />
        <area shape='circle' coords='1089,637,6' href='#' title='강변' alt='강변' />
        <area shape='circle' coords='1088,697,6' href='#' title='잠실나루' alt='잠실나루' />
        <area shape='circle' coords='1092,740,6' href='#' title='잠실' alt='잠실' />
        <area shape='circle' coords='1088,779,6' href='#' title='잠실새내' alt='잠실새내' />
        <area shape='circle' coords='1090,814,6' href='#' title='종합운동장' alt='종합운동장' />
        <area shape='circle' coords='1062,859,6' href='#' title='삼성' alt='삼성' />
        <area shape='circle' coords='1022,879,6' href='#' title='선릉' alt='선릉' />
        <area shape='circle' coords='997,878,6' href='#' title='역삼' alt='역삼' />
        <area shape='circle' coords='974,874,6' href='#' title='강남' alt='강남' />
        <area shape='circle' coords='919,874,6' href='#' title='교대' alt='교대' />
        <area shape='circle' coords='893,877,6' href='#' title='서초' alt='서초' />
        <area shape='circle' coords='862,878,6' href='#' title='방배' alt='방배' />
        <area shape='circle' coords='833,874,6' href='#' title='사당' alt='사당' />
        <area shape='circle' coords='782,878,6' href='#' title='낙성대' alt='낙성대' />
        <area shape='circle' coords='733,877,6' href='#' title='서울대입구' alt='서울대입구' />
        <area shape='circle' coords='682,878,6' href='#' title='봉천' alt='봉천' />
        <area shape='circle' coords='631,880,6' href='#' title='신림' alt='신림' />
        <area shape='circle' coords='594,864,6' href='#' title='신대방' alt='신대방' />
        <area shape='circle' coords='568,833,6' href='#' title='구로디지털단지' alt='구로디지털단지' />
        <area shape='circle' coords='563,790,6' href='#' title='대림' alt='대림' />
        <area shape='circle' coords='561,722,6' href='#' title='신도림' alt='신도림' />
        <area shape='circle' coords='517,718,6' href='#' title='도림천' alt='도림천' />
        <area shape='circle' coords='473,718,6' href='#' title='양천구청' alt='양천구청' />
        <area shape='circle' coords='429,717,6' href='#' title='신정네거리' alt='신정네거리' />
        <area shape='circle' coords='398,684,6' href='#' title='까치산' alt='까치산' />
        <area shape='circle' coords='563,698,6' href='#' title='문래' alt='문래' />
        <area shape='circle' coords='562,678,6' href='#' title='영등포구청' alt='영등포구청' />
        <area shape='circle' coords='562,632,6' href='#' title='당산' alt='당산' />
        <area shape='circle' coords='561,580,6' href='#' title='합정' alt='합정' />
        <area shape='circle' coords='566,531,6' href='#' title='홍대입구' alt='홍대입구' />
        <area shape='circle' coords='578,478,6' href='#' title='신촌' alt='신촌' />
        <area shape='circle' coords='605,456,6' href='#' title='이대' alt='이대' />
        <area shape='circle' coords='650,448,6' href='#' title='아현' alt='아현' />
        <area shape='circle' coords='680,445,6' href='#' title='충정로' alt='충정로' />
        <area shape='circle' coords='741,445,6' href='#' title='시청' alt='시청' />
        <area shape='circle' coords='768,448,6' href='#' title='을지로입구' alt='을지로입구' />
        <area shape='circle' coords='799,445,6' href='#' title='을지로3가' alt='을지로3가' />
        <area shape='circle' coords='833,445,6' href='#' title='을지로4가' alt='을지로4가' />
        <area shape='circle' coords='867,448,6' href='#' title='동대문역사문화공원' alt='동대문역사문화공원' />
        <area shape='circle' coords='924,445,6' href='#' title='신당' alt='신당' />
        <area shape='circle' coords='976,447,6' href='#' title='상왕십리' alt='상왕십리' />
        <area shape='circle' coords='1014,448,10' href='#' title='왕십리' alt='왕십리' />
        <area shape='circle' coords='1061,466,6' href='#' title='한양대' alt='한양대' />
        <area shape='circle' coords='1081,496,6' href='#' title='뚝섬' alt='뚝섬' />
      </map>
    </div>
  )
}
export default Line2
