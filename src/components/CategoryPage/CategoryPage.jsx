import React, { useContext, useEffect } from 'react'
import { BooksContext } from '../Context/BooksContext'
import "./CategoryPage.css"
import { Link } from 'react-router';

const CategoryPage = () => {
    const { categoriesBooks, category, handleDetails, loading } = useContext(BooksContext);

    const handlePreview = (book) => {
        window.open(book.volumeInfo.previewLink, "_blank");
    }

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

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
        <div className="category-page">
            <h1>Books for <span>{category}</span> category</h1>
            {categoriesBooks.length === 0 ? (
                <p>No books found for this category.</p>
            ) : (
                <div className="categories-books-container">
                {
                    categoriesBooks
                    .filter(book => book.volumeInfo.imageLinks?.thumbnail)
                    .map((book, index) => {
                        return (
                            <div key={index} className='book-card' onClick={() =>handleDetails(book)}>
                                <Link to="/bookDetails" onClick={() =>handleDetails(book)}>
                                <img className='book-img'
                                    src={book.volumeInfo.imageLinks?.thumbnail}
                                    alt={book.volumeInfo.title}
                                />
                                </Link>
                                <button className='read-btn' onClick={() => handlePreview(book)}>Read Now</button>
                            </div>
                        )
                    })
                }
            </div>
            )}
        </div>
    );
};


export default CategoryPage