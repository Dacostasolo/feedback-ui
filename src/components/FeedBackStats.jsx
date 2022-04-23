import { useContext } from 'react'
import FeedbackContext from '../context/FeedBackContext'

function FeedBackStats() {
  const {feedBack,average} = useContext(FeedbackContext)
 

  return (
    <div className='feedback-stats'>
      <h4>{feedBack.length} Review</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedBackStats
