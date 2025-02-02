import React, { useContext, useEffect, useState } from 'react'
import "./Admin.css"

const Admin = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New Books Added Successfully!");
  }

  return (
    <div className='admin-page'>
      <form className='add-books-form'>
        <h2>Add Books</h2>
        <input type="text" placeholder='Book Name' />
        <input type="text" placeholder='Auther Name' />
        <textarea name="description" placeholder='Description'></textarea>
        <input type="text" placeholder='Category'/>
        <input type="text" placeholder='Rating' />
        <input type="text" placeholder='Book Image' />
        <input type="text" placeholder='Download Link' />
        <input type="text" placeholder='Read Link' />
        <div className="submit-btn">
          <button className='addBook-btn' onClick={handleSubmit}>Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default Admin