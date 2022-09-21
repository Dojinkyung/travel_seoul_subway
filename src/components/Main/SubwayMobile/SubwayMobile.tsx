import { SetStateAction, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { getTrainId } from '../../../redux/slice'
import Modal from '../Modal/Modal'
import { items } from '../Subway/Lines'
import styles from './subwayMobile.module.scss'

const SubwayMobile = () => {
  const selected = useSelector(getTrainId)
  const [station, setStation] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const closeReq = () => {
    setIsOpen(false)
  }
  const handleStation = (event: any) => {
    setStation(event.target.id)
    console.log(event.target.id)
    setIsOpen(true)
  }
  const onChange = (event: { currentTarget: { value: SetStateAction<string> } }) => {
    setSearch(event.currentTarget.value)
  }
  const searchStation = useMemo(() => {
    if (!search) {
      return items[Number(selected) - 1]
    }
    return items[Number(selected) - 1].filter((data) => {
      return data.Title.includes(search)
    })
  }, [search, selected])
  const colors = ['	#0052A4', '#009D3E', '#EF7C1C', '#00A5DE', '#996CAC', '#CD7C2F', '#747F00', '#EA545D', '#BB8336']
  return (
    <div className={styles.subwayListsWrap}>
      <input placeholder='역을 검색하세요' type='text' value={search} className={styles.searcher} onChange={onChange} />
      <ul className={styles.subwayList}>
        {searchStation.map((item) => {
          return (
            <button
              key={item.Key}
              type='button'
              id={item.Title}
              onClick={handleStation}
              className={styles.subwayElement}
            >
              <li className={styles.station} id={item.Title}>
                <div
                  className={styles.circle}
                  id={item.Title}
                  style={{ borderColor: colors[parseInt(selected, 10) - 1] }}
                >
                  <h1 className={styles.info} id={item.Title}>
                    {item.Title}역
                  </h1>
                </div>
              </li>
            </button>
          )
        })}
      </ul>
      {isOpen ? <Modal selectedLine={selected} open={isOpen} close={closeReq} item={station} /> : null}
    </div>
  )
}
export default SubwayMobile
