import { SetStateAction, useMemo, useState } from 'react'
import styles from './DropDown.module.scss'

const Dropdown = () => {
  const lines = [
    { name: '1호선', id: 1 },
    { name: '2호선', id: 2 },
    { name: '3호선', id: 3 },
    { name: '4호선', id: 4 },
    { name: '5호선', id: 5 },
    { name: '6호선', id: 6 },
    { name: '7호선', id: 7 },
    { name: '8호선', id: 8 },
    { name: '9호선', id: 9 },
    { name: '인천1', id: 10 },
    { name: '분당선', id: 11 },
    { name: '경의선', id: 12 },
    { name: '신분당선', id: 13 },
    { name: '공항철도', id: 14 },
    { name: '중앙선', id: 15 },
    { name: '경춘선', id: 16 },
    { name: '수인선', id: 17 },
  ]

  const [values, setValue] = useState('호선')
  const [show, setShow] = useState(false)

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setShow((current) => !current)
  }
  const onValue = (event: { currentTarget: { name: any } }) => {
    setValue(event.currentTarget.name)
  }

  return (
    <div>
      <div className={styles.dropDown}>
        <button type='button' onClick={onClick} className={styles.dropDownBtn}>
          {values}
        </button>

        <ul id='dropdown' className={show ? styles.select : styles.hidden}>
          {lines.map((line) => (
            <button
              type='button'
              key={`line-key ${line.id}`}
              onClick={onValue}
              className={styles.dropBtn}
              name={`${line.name}`}
            >
              {line.name}
            </button>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Dropdown
