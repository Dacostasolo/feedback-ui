import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedBackContext'

function FeedBackForm() {
  const [text, setTextState] = useState('')
  const [message, setMessageState] = useState('')
  const [isDisabled, setButtonState] = useState(true)
  const [rating, setRatingstate] = useState(10)
  const { addFeedBack, editFeedback, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (editFeedback.isEdit) {
      setButtonState(false)
      setTextState(editFeedback.item.text)
    }
  }, [editFeedback])

  const submitFeedBack = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      }
      if (editFeedback.isEdit === true) {
       updateFeedback(editFeedback.item.id,newFeedback)
      } else {
        addFeedBack(newFeedback)
      }
      setButtonState(true)
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
