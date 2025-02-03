import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import dotenv from "dotenv";
import { redirect, useNavigate } from 'react-router';

export const BooksContext = createContext(null);

const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [bookDetails, setBookDetails] = useState(null);
    const [category, setCategory] = useState("");
    const [categoriesBooks, setCategoriesBooks] = useState([]);

    const handleDetails = (book) =>{
        setBookDetails(book);
    }

    const fetchCategoriesBooks = async () => {
        try {
            const apiKey = import.meta.env.VITE_REACT_GB_KEY;
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=10&key=${apiKey}`);
            const data = await response.json();  // Added await to ensure data is resolved
            setCategoriesBooks(data.items);  // Set the books after fetching
        } catch (error) {
            console.log(error);
        }
    }
    

    const fetchBookdata = async () => {
        try {
            const apiKey = import.meta.env.VITE_REACT_GB_KEY;
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=*&maxResults=20&startIndex=2&key=${apiKey}`);
            const data = await response.json();
            setBooks(data.items);  // Make sure you're setting the books correctly here (using 'items')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBookdata();
    }, []);

    useEffect(() => {
        if (category) {
            fetchCategoriesBooks();
        }
    }, [category]);  // This will trigger fetchCategoriesBooks whenever 'category' changes
    

    // Log books whenever it updates
    useEffect(() => {
        console.log(books);
    }, [books]);  // This will log after books are updated

    const value = {
        books, setBooks,
        handleDetails,
        bookDetails,
        category, setCategory,
        categoriesBooks,
    }

    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;
