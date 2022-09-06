import { useSelector } from 'react-redux'
import { getTrainId } from '../../redux/slice'
import Line1 from './lines/Line1'
import Line2 from './lines/Line2'
import Line3 from './lines/Line3'
import Line4 from './lines/Line4'
import Line5 from './lines/Line5'
import Line6 from './lines/Line6'
import Line7 from './lines/Line7'
import Line8 from './lines/Line8'
import Line9 from './lines/Line9'

const Subway = () => {
  const selected = useSelector(getTrainId)
  return (
    <div>
      <Line1 selected={selected} />
      <Line2 selected={selected} />
      <Line3 selected={selected} />
      <Line4 selected={selected} />
      <Line5 selected={selected} />
      <Line6 selected={selected} />
      <Line7 selected={selected} />
      <Line8 selected={selected} />
      <Line9 selected={selected} />
    </div>
  )
}

export default Subway
