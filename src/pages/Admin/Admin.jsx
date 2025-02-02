import React, { useContext, useEffect, useState } from 'react'
import "./Admin.css"
import { BooksContext } from '../../components/Context/BooksContext'

const Admin = () => {

  const { bookName, setBookName,
    authorName, setAuthorName,
    description, setDescription,
    category, setCategory,
    rating, setRating,
    bookImage, setBookImage,
    downloadLink, setDownloadLink,
    readLink, setReadLink,
    handleAddBooks,
    books, setBooks } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookName || !authorName || !description || !rating || !bookImage) {
      alert("Please fill all fields!");
      return;
    }    
    handleAddBooks();
    setBookName("");
    setAuthorName("");
    setDescription("");
    setCategory("");
    setRating("");
    setBookImage("");
    setDownloadLink("");
    setReadLink("");
    alert("New Books Added Successfully!");
  }

  return (
    <div className='admin-page'>
      <form className='add-books-form'>
        <h2>Add Books</h2>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} placeholder='Book Name' />
        <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder='Auther Name' />
        <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'></textarea>
        <input type="text" placeholder='Category' value = {category} onChange={(e) =>setCategory(e.target.value)} />
        <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} placeholder='Rating' />
        <input type="text" value={bookImage} onChange={(e) => setBookImage(e.target.value)} placeholder='Book Image' />
        <input type="text" value={downloadLink} onChange={(e) =>setDownloadLink(e.target.value)} placeholder='Download Link' />
        <input type="text" value={readLink} onChange={(e) =>setReadLink(e.target.value)} placeholder='Read Link' />
        <div className="submit-btn">
          <button className='addBook-btn' onClick={handleSubmit}>Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default Admin