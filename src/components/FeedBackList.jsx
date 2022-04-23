import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import FeedbackContext from '../context/FeedBackContext'

function FeedBackList() {
  const { feedBack, deleteFeedBack } = useContext(FeedbackContext)
  if (!feedBack || feedBack.length === 0) {
    return <p>No feed back yet</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedBack.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, transitionDuration: '250ms' }}
              animate={{ opacity: 1, transitionDuration: '250ms' }}
              exit={{ opacity: 0, transitionDuration: '250ms' }}
            >
              <FeedBackItem
                key={item.id}
                item={item}
                deleteHandler={deleteFeedBack}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
 
}



export default FeedBackList
