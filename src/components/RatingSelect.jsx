import { useState,useEffect,useContext } from 'react'
import FeedbackContext from '../context/FeedBackContext'
import RatingItem from './RatingItem'

function RatingSelect({ selectValue }) {
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [selected, setSelectedState] = useState(10)
  const { editFeedback } = useContext(FeedbackContext)


  useEffect(() => {
    if(editFeedback.isEdit){
      setSelectedState(editFeedback.item.rating)
    }
  }, [editFeedback])

  const handleChange = (e) => {
    setSelectedState(+e.currentTarget.value)
    selectValue(+e.currentTarget.value)
  }
  return (
    <ul className='rating'>
      {ratings.map((item) => {
        return (
          <li key={item}>
            <RatingItem
              id={`num${item}`}
              value={item}
              changeHandler={handleChange}
              selected={selected}
            />
            <label htmlFor={`num${item}`}>{item}</label>
          </li>
        )
      })}
    </ul>
  )
}

export default RatingSelect
