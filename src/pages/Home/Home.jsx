import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import "./Home.css"
import Categories from '../../components/Categories/Categories'
import Books from '../../components/Books/Books'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  
}, []);

  return (
    < div className='home'>
        <Header/>
        <Categories/>
        <Books/>
    </div>
  )
}

export default Home