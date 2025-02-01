import React from "react";
import "./Header.css";

const images = [
  "/src/assets/images/img1.jpg",
  "/src/assets/images/img2.jpg",
  "/src/assets/images/img3.jpg",
  "/src/assets/images/img4.jpg",
  "/src/assets/images/img5.jpg",
  "/src/assets/images/img6.jpg",
];

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Welcome to Your Digital Library of Knowledge!</h1>
        <p>
          Discover a vast collection of books and explore the world of knowledge. <br />
          Read, download, and enjoy your next favorite book!
        </p>
        <div>
          <button className="header-btn">Explore books</button>
        </div>
      </div>

      {/* 3D Rotating Carousel */}
      <div className="carousel-container">
        <div className="carousel">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Book ${index + 1}`}
              style={{ transform: `rotateY(${index * 60}deg) translateZ(250px)` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
