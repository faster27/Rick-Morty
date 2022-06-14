import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AboutMe from './AboutMe'
import Home from './Home'

export default function Main() {
  return (
    <div>
        
        <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/AboutMe' element={<AboutMe />} />
        </Routes>

    </div>
  )
}

