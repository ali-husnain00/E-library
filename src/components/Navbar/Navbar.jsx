import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router'

const Navbar = () => {

  const [activeLink, setActiveLink] = useState("home");
  
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>E-Library</h1>
      </div>
      <ul className="nav-list">
        <Link to="/"><li className={activeLink === "home" ? "active" : ""} onClick={() =>setActiveLink("home")}  >Home</li></Link>
        <Link to="/allbooks"><li className={activeLink === "allbooks" ? "active" : ""} onClick={() =>setActiveLink("allbooks")}>All Books</li></Link>
        <Link to="/about"><li className={activeLink === "about" ? "active" : ""} onClick={() =>setActiveLink("about")}>About</li></Link>
      </ul>
    </div>
  )
}

export default Navbar