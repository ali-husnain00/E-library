import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import AllBooks from './pages/AllBooks/AllBooks '
import About from './pages/About/About'
import Admin from './pages/Admin/Admin'
import Footer from './components/Footer/Footer'
import BookDetails from './components/BookDetails/BookDetails'
import CategoryPage from './components/CategoryPage/CategoryPage'
import { BooksContext } from './components/Context/BooksContext'
import SearchedBooks from './components/SearchedBooks/SearchedBooks'

const App = () => {
  const {searchValue} = useContext(BooksContext);
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/allbooks' element = {<AllBooks/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/admin-addBooks' element = {<Admin/>} />
        <Route path='/bookDetails' element = {<BookDetails/>} />
        <Route path='/category' element = {<CategoryPage/>} />
        <Route path={`/search`} element = {<SearchedBooks/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App