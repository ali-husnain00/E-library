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
    const [searchValue, setSearchValue] = useState("");
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleDetails = (book) => {
        setBookDetails(book);
    }

    const fetchCategoriesBooks = async () => {
        try {
            setLoading(true);
            const apiKey = import.meta.env.VITE_REACT_GB_KEY;
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=10&key=${apiKey}`);
            const data = await response.json();  // Added await to ensure data is resolved
            setCategoriesBooks(data.items || []);  // Set the books after fetching
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }


    const fetchBookdata = async () => {
        try {
            const apiKey = import.meta.env.VITE_REACT_GB_KEY;
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=*&maxResults=20&startIndex=2&key=${apiKey}`);
            const data = await response.json();
            setBooks(data.items || []);  // Make sure you're setting the books correctly here (using 'items')
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = async () => {
        try {
            setLoading(true);
            const apiKey = import.meta.env.VITE_REACT_GB_KEY;
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=10&key=${apiKey}`);
            const data = await response.json();
            setSearchedBooks(data.items || []);
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
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


    useEffect(() => {
        if (searchValue) {
            handleSearch();
        }
    }, [searchValue])

    const value = {
        books, setBooks,
        handleDetails,
        bookDetails,
        category, setCategory,
        categoriesBooks,
        searchValue, setSearchValue,
        searchedBooks, handleSearch,
        loading,
    }

    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;
