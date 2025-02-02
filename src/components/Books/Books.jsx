import React, { useContext } from 'react'
import { BooksContext } from '../Context/BooksContext'
import "./books.css"

const Books = () => {


    const {books} = useContext(BooksContext);
    const displayedBooks = books.slice(0, 10);

  return (
    <div className='books'>
        <h1>Our best books to read</h1>
        <ul className="Books-slider">
            {
                displayedBooks.map((book, index) =>{
                    return(
                        <li key={index}>
                            <img src={book.bookImage} alt="" />
                            <p>{book.bookName}</p>
                            <p>{book.bookRating}</p>
                            <div className="action-btns">
                                <button className='read-btn'><a href={book.readLink}>Read</a></button>
                                <button className='download-btn'><a href={book.downloadLink}>Download</a></button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>

    </div>
  )
}

export default Books