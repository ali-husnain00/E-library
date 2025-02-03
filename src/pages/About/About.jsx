import React, { useEffect } from 'react';
import './About.css';

const About = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our E-Library</h1>
          <p>Your gateway to an endless collection of books, learning, and exploration.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At our E-Library, we aim to provide easy, free access to a wide range of books and resources for learners of all ages. Whether you're here for personal enjoyment or professional growth, we have something for you!
        </p>
      </section>

      {/* Core Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <i className="fas fa-search"></i>
            <h3>Search Books</h3>
            <p>Search through thousands of books by title, author, or category.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-book"></i>
            <h3>Categories</h3>
            <p>Explore books in various categories such as Fiction, Programming, Science, and more.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-heart"></i>
            <h3>Save Your Favorites</h3>
            <p>Save your favorite books to read later or track your reading history.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
