import { SetStateAction, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { getTrainId } from '../../../redux/slice'
import Modal from '../modal/Modal'
import { items } from '../../../data/Lines'
import styles from './subwayMobile.module.scss'

const SubwayMobile = () => {
  const selected = useSelector(getTrainId)
  const [station, setStation] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [line, setLine] = useState('')

  const closeReq = () => {
    setIsOpen(false)
  }
  const handleStation = (event: any) => {
    setStation(event.target.id)
    setLine(event.target.value)
    setIsOpen(true)
  }
  const onChange = (event: { currentTarget: { value: SetStateAction<string> } }) => {
    setSearch(event.currentTarget.value)
  }
  const searchStation = useMemo(() => {
    if (!search) {
      return items[Number(selected) - 1]
    }
    let arr: any[] = []
    items.forEach((item) => {
      arr = [...arr, ...item]
    })

    return arr.filter((data) => {
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
            <li key={item.Key} id={item.Title} value={item.Line} className={styles.station}>
              <button
                type='button'
                style={{ borderColor: colors[item.Line - 1] }}
                className={styles.circle}
                value={item.Line}
                id={item.Title}
                onClick={handleStation}
              >
                {item.Title}역
              </button>
            </li>
          )
        })}
      </ul>
      {isOpen ? <Modal selectedLine={line} open={isOpen} close={closeReq} item={station} /> : null}
    </div>
  )
}
export default SubwayMobile
