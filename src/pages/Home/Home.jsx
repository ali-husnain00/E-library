import React from 'react'
import Header from '../../components/Header/Header'
import "./Home.css"
import Categories from '../../components/Categories/Categories'
import Books from '../../components/Books/Books'

const Home = () => {
  return (
    < div className='home'>
        <Header/>
        <Categories/>
        <Books/>
    </div>
  )
}

export default Home