import { useMediaQuery } from 'react-responsive'

import styles from './app.module.scss'
import Header from './components/header/Header'
import Subway from './components/main/subway/Subway'
import SubwayMobile from './components/main/subwayMobile/SubwayMobile'

const Mobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? <SubwayMobile /> : null
}
const Desktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 767 })
  return isDesktop ? <Subway /> : null
}
const App = () => {
  return (
    <div className={styles.bg}>
      <Header />
      <Desktop />
      <Mobile />
    </div>
  )
}

export default App
