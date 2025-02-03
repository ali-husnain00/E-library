import React, { useContext, useEffect } from 'react'
import { BooksContext } from '../Context/BooksContext'
import "./CategoryPage.css"
import { Link } from 'react-router';

const CategoryPage = () => {
    const { categoriesBooks, category, handleDetails } = useContext(BooksContext);

    const handlePreview = (book) => {
        window.open(book.volumeInfo.previewLink, "_blank");
    }

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    if (!categoriesBooks) return <p>Loading...</p>;  

    return (
        <div className="category-page">
            <h1>Books for <span>{category}</span> category</h1>
            {categoriesBooks.length === 0 ? (
                <p>No books found for this category.</p>
            ) : (
                <div className="categories-books-container">
                {
                    categoriesBooks.map((book, index) => {
                        return (
                            <div key={index} className='categories-book-card' onClick={() =>handleDetails(book)}>
                                <Link to="/bookDetails" onClick={() =>handleDetails(book)}>
                                <img className='cate-book-img'
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