import React, { useEffect, useState } from 'react'
import { createContext } from "react";

export const BooksContext = createContext(null);


const BooksContextProvider = ({ children }) => {

    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [bookImage, setBookImage] = useState("");
    const [downloadLink, setDownloadLink] = useState("");
    const [readLink, setReadLink] = useState(""); 
    const [books, setBooks] = useState([]);

    const handleAddBooks = () =>{
        setBooks((prev) => [...prev, {bookName, authorName, description, category, rating, bookImage, downloadLink, readLink}]);
    }

    useEffect(() => {
        const savedBooks = localStorage.getItem("books");
        if (savedBooks) {
          setBooks(JSON.parse(savedBooks));
        }
      }, []); // Empty dependency array to run only once when the component mounts
    
      // Save books to localStorage when books state changes
      useEffect(() => {
        if (books.length > 0) {
          localStorage.setItem("books", JSON.stringify(books));
        }
      }, [books]); // Runs whenever books state changes
    

    const value = {
        bookName, setBookName,
        authorName, setAuthorName,
        description, setDescription,
        category, setCategory,
        rating, setRating,
        bookImage, setBookImage,
        downloadLink, setDownloadLink,
        readLink, setReadLink,
        handleAddBooks,
        books, setBooks,
    }

    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    )

}

export default BooksContextProvider;