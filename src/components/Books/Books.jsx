import React, { useContext, useEffect, useRef, useState } from 'react';
import {Link } from "react-router"
import { BooksContext } from '../Context/BooksContext';
import './books.css';


const Books = () => {

    const { books } = useContext(BooksContext);
    const [inView, setInView] = useState(false);
    const booksRef = useRef([]);

    const checkVisibility = () =>{
        booksRef.current.forEach((book, index) =>{
            const rect = book.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
            if(isVisible){
                setInView(true);
            }
            else{
                setInView(false);
            }
        })
    }

    useEffect(() =>{
        window.addEventListener("scroll", checkVisibility)
        checkVisibility();

        return () =>{
            window.removeEventListener('scroll', checkVisibility);
        }
    },[])

    const handlePreview = (book) => {
        window.open(book.volumeInfo.previewLink, "_blank");
    }

    return (
        <div className='books'>
            <h1>Our best Books to Read</h1>
            <div className="books-container">
                {
                    books.map((book, index) => {
                        return (
                            <Link to="/allbooks">
                            <div key={index} className={`book-card ${inView ? "appeared" : ""}`} ref={(el) => booksRef.current[index] = el}>
                                <img className='book-img'
                                    src={book.volumeInfo.imageLinks?.thumbnail}
                                    alt={book.volumeInfo.title}
                                />
                                <button className='read-btn' onClick={() => handlePreview(book)}>Read Now</button>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Books;
