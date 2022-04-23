import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext} from 'react'
import FeedbackContext from '../context/FeedBackContext'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedBackItem({ item, deleteHandler }) {
  const {  editFeedbackItem } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => {deleteHandler(item.id)}}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedbackItem(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  item: PropTypes.object,
}
export default FeedBackItem
