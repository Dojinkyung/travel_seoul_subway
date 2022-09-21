import Header from './components/Header/Header'
import Subway from './components/Main/Subway/Subway'
import styles from './app.module.scss'
import { useMediaQuery } from 'react-responsive'
import SubwayMobile from './components/Main/SubwayMobile/SubwayMobile'

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
