import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'

import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import About from './pages/About'
import AboutLink from './components/AboutLink'
import { FeedBackProvider } from './context/FeedBackContext'

function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header />

        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            />

            <Route path='/about' element={<About />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedBackProvider>
  )
}

export default App
