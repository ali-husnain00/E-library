import React, { useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../components/Context/BooksContext';
import { Link, useNavigate } from 'react-router-dom'; 
import "./AllBooks.css";

const AllBooks = () => {
  const { books, handleDetails, searchValue, setSearchValue, handleSearch, } = useContext(BooksContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handlePreview = (book, e) => {
    e.stopPropagation(); 
    window.open(book.volumeInfo.previewLink, "_blank");
  };

  const handleSearchedBooks = () =>{
    setSearchValue(search);
    navigate(`/search`);
  }

  

  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);

  return (
    <div className='all-books'>
      <h1>All Books</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder='Search by book name'
          className='book-search-bar' value={search}
          onChange={(e) =>setSearch(e.target.value)}
        />
        <button className='search-btn' onClick={handleSearchedBooks}>Search</button>
      </div>
      <div className="books-container">
        {books
        .filter(book => book.volumeInfo.imageLinks?.thumbnail)
        .map((book, index) => (
          <div key={index} className='all-book-card'>
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
  );
};

export default AllBooks;
