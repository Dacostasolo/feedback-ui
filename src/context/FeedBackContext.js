import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedBackData from '../data/FeedBackData'

const FeedbackContext = createContext()

export function FeedBackProvider({ children }) {
  const [feedBack, setFeedBack] = useState(FeedBackData)

  const deleteFeedBack = (id) => {
    if (true) {
      setFeedBack(feedBack.filter((item) => item.id !== id))
    }
  }

  const addFeedBack = (newFeedBack) => {
    newFeedBack = { id: uuidv4(), ...newFeedBack }
    setFeedBack([newFeedBack, ...feedBack])
  }

   const average = (
    feedBack.reduce((acc, item) => {
      return acc + item.rating
    }, 0) / feedBack.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '')


    
  return (
    <FeedbackContext.Provider
      value={{
        feedBack,
        deleteFeedBack,
        addFeedBack,
        average,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
