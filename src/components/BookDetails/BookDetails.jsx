import React, { useContext, useEffect } from 'react'
import { BooksContext } from '../Context/BooksContext'
import "./BookDetail.css"

const BookDetails = () => {

    const { bookDetails } = useContext(BooksContext);

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <div className='book-details'>
            {
                bookDetails ? (
                    <div className="book-details-card">
                        <div className="card-upper">
                            <div className="bd-img">
                                <img src={bookDetails?.volumeInfo.imageLinks?.thumbnail} alt="" />
                            </div>
                        </div>
                        <div className="bd-content">
                            <div className='gap'>
                                <h3>Title:</h3>
                                <p>{bookDetails?.volumeInfo.title}</p>
                            </div>
                            <div className='gap'>
                                <h4>Author: </h4>
                                <p>{bookDetails?.volumeInfo.authors ? bookDetails.volumeInfo.authors : "Not Mentioned"}</p>
                            </div>
                            <div className='gap'>
                                <h4>Description:</h4>
                                <p>{bookDetails?.volumeInfo.description ? bookDetails.volumeInfo.description.length > 300 ?
                                bookDetails.volumeInfo.description.substring(0,300) + "...." : bookDetails.volumeInfo.description : "Not Mentioned" }</p>
                            </div>
                            <div className='gap'>
                                <h4>Category: </h4>
                                <p>{bookDetails?.volumeInfo.categories ? bookDetails.volumeInfo.categories : "Not Mentioned"}</p>
                            </div>
                            <div className='gap'>
                                <h4>Publisher: </h4>
                                <p>{bookDetails?.volumeInfo.publisher ? bookDetails.volumeInfo.publisher : "Not Mentioned"}</p>
                            </div>
                            <div className='gap'>
                                <h4>Published Date: </h4>
                                <p>{bookDetails?.volumeInfo.publishedDate ? bookDetails.volumeInfo.publishedDate : "Not Mentioned"}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>No Book found</p>
                )
            }
        </div>
    )
}

export default BookDetails