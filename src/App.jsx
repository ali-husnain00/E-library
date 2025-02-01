import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import AllBooks from './pages/AllBooks/AllBooks '
import About from './pages/About/About'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/allbooks' element = {<AllBooks/>} />
        <Route path='/about' element = {<About/>} />
      </Routes>
    </div>
  )
}

export default App