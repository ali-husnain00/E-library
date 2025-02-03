import React, { useContext, useEffect, useRef, useState } from 'react';
import {Link } from "react-router"
import { BooksContext } from '../Context/BooksContext';
import './books.css';


const Books = () => {

    const [books, setBooks] = useState([]);
    const [inView, setInView] = useState(false);
    const booksRef = useRef([]);
    const {handleDetails} = useContext(BooksContext);

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


    const fetchBookdata = async () => {
            try {
                const apiKey = import.meta.env.VITE_REACT_GB_KEY;
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=*&maxResults=10&startIndex=2&key=${apiKey}`);
                const data = await response.json();
                setBooks(data.items);  // Make sure you're setting the books correctly here (using 'items')
            } catch (error) {
                console.log(error);
            }
        }
    
        useEffect(() => {
            fetchBookdata();
        }, []);


    const handlePreview = (book) => {
        window.open(book.volumeInfo.previewLink, "_blank");
    }

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <div className='books'>
            <h1>Our best Books to Read</h1>
            <div className="books-container">
                {
                    books.map((book, index) => {
                        return (
                            <div key={index} className={`book-card ${inView ? "appeared" : ""}`} ref={(el) => booksRef.current[index] = el} onClick={() =>handleDetails(book)}>
                                <Link to="/bookDetails">
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
        </div>
    )
}

export default Books;
