import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedBackData from '../data/FeedBackData'

const FeedbackContext = createContext()

export function FeedBackProvider({ children }) {
  const [feedBack, setFeedBack] = useState(FeedBackData)

  const [editFeedback, setEidtFeedback] = useState({
    item: {},
    isEdit: false,
  })

  const deleteFeedBack = (id) => {
    if (true) {
      setFeedBack(feedBack.filter((item) => item.id !== id))
    }
  }

  // add feedback function
  const addFeedBack = (newFeedBack) => {
    newFeedBack = { id: uuidv4(), ...newFeedBack }
    setFeedBack([newFeedBack, ...feedBack])
  }

  const editFeedbackItem = (item) => {
    setEidtFeedback({
        item,
        isEdit: true,
      })
  }

  const updateFeedback = (id,updItem) =>{
    setFeedBack(feedBack.map((item)=>{
      return item.id === id ? { ...item, ...updItem } : item
    }))
    setEidtFeedback({
      isEdit : false
    })
  }
  //calculating average rate
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
        editFeedback,
        average,
        deleteFeedBack,
        addFeedBack,
        editFeedbackItem,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
