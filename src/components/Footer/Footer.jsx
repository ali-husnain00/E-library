import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title"><a href="/">E-BooksShelf</a></h2>
          <p className="footer-description">
            Explore and read the best books from various genres. Start your reading adventure now.
          </p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
          <div className="footer-social">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">LN</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 E-BooksShelf. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
