import { useState ,useContext} from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedBackContext'

function FeedBackForm() {
  const [text, setTextState] = useState('')
  const [message, setMessageState] = useState('')
  const [isDisabled, setButtonState] = useState(true)
  const [rating, setRatingstate] = useState(10)
  const {addFeedBack } = useContext(FeedbackContext)

  const submitFeedBack = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const feedBack = {
        rating,
        text,
      }
      addFeedBack(feedBack)
      setTextState('')
    }
  }

  const textChangeHanler = (e) => {
    if (text === '') {
      setMessageState(null)
      setButtonState(true)
    } else if (text !== '' && text.trim().length < 10) {
      setMessageState('Text should be at least 10 characters')
      setButtonState(true)
    } else {
      setButtonState(false)
      setMessageState(null)
    }
    setTextState(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={submitFeedBack}>
        <h2>How will you rate your service with us?</h2>
        <RatingSelect selectValue={(rating) => setRatingstate(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='write a review'
            onChange={textChangeHanler}
            value={text}
          />
          <Button type='submit' isDisabled={isDisabled}>
            <span>Send</span>
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedBackForm
