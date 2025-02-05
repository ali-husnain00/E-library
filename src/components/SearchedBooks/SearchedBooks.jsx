import React, { useContext } from 'react'
import { BooksContext } from '../Context/BooksContext'
import { Link } from 'react-router';
import "./SearchedBooks.css"

const SearchedBooks = () => {

    const { searchedBooks, searchValue, handleDetails, loading } = useContext(BooksContext);

    const handlePreview = (book, e) => {
        e.stopPropagation();
        window.open(book.volumeInfo.previewLink, "_blank");
    };

    if (loading) {
        return (
            <div className="loading">
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    return (
        <div className='searched-books-page'>
            {
                searchValue ? (
                    <div className="wrapper">
                        <h1>Results for <span>{searchValue}</span></h1>
                        <div className="searchedBooks-list">
                            {searchedBooks
                            .filter(book => book.volumeInfo.imageLinks?.thumbnail)
                            .map((book, index) => (
                                <div key={index} className='searched-book-card'>
                                    <Link to="/bookDetails" onClick={() => handleDetails(book)}>
                                        <img className='book-img'
                                            src={book.volumeInfo.imageLinks?.thumbnail}
                                            alt={book.volumeInfo.title}
                                        />
                                    </Link>
                                    <button className='read-btn' onClick={(e) => handlePreview(book, e)}>Read Now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No books found for this search</p>
                )
            }
        </div>
    )
}

export default SearchedBooks