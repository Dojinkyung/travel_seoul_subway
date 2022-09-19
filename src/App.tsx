import Header from './components/Header/Header'
import Subway from './components/Main/Subway/Subway'
import styles from './app.module.scss'

const App = () => {
  return (
    <div className={styles.bg}>
      <Header />
      <Subway />
    </div>
  )
}

export default App
