import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router'

const Navbar = () => {

  const [activeLink, setActiveLink] = useState("home");
  const [ activeMenu, setActiveMenu] = useState(false);

  const handleHomeLink = () =>{
    setActiveLink("home");
    setActiveMenu(false);
  }

  const handleBooksLink = () =>{
    setActiveLink("allbooks");
    setActiveMenu(false);
  }

  const handleAboutLink = () =>{
    setActiveLink("about");
    setActiveMenu(false);
  }
  
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>E-Library</h1>
      </div>
      <i className='fa fa-bars' onClick={() =>setActiveMenu(true)}></i>
      <ul className={`nav-list ${activeMenu ? "activeMenu" : ""}`}>
        <div className="close-menu">
        <i className="fa-solid fa-xmark" onClick={() =>setActiveMenu(false)}></i>
        </div>
        <Link to="/"><li className={activeLink === "home" ? "active" : ""} onClick={handleHomeLink}   >Home</li></Link>
        <Link to="/allbooks"><li className={activeLink === "allbooks" ? "active" : ""} onClick={handleBooksLink}>All Books</li></Link>
        <Link to="/about"><li className={activeLink === "about" ? "active" : ""} onClick={handleAboutLink}>About</li></Link>
      </ul>
    </div>
  )
}

export default Navbar