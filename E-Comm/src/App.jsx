import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'


const App = () => {
  return (
    <div className='px-4 sm:px-{5vw} md:pc-{7vw} lg:px-{9vw}'>

      <Routes >
        <Route path='/' element={Home} />
        <Route path='/collection' element={Collection} />
        <Route path='/about' element ={About} />
       </Routes>
    </div>
  )
}

export default App