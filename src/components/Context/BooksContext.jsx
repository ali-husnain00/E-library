import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import dotenv from "dotenv";

export const BooksContext = createContext(null);

const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBookdata = async () => {
        try {
            const apiKey = import.meta.env.VITE_REACT_GB_KEY;
            console.log(`Api key:`,apiKey);
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

    // Log books whenever it updates
    useEffect(() => {
        console.log(books);
    }, [books]);  // This will log after books are updated

    const value = {
        books, setBooks,
    }

    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;
