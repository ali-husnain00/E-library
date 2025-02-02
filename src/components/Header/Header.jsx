import React from "react";
import {Link} from "react-router"
import "./Header.css";

const images = [
  "https://tse3.mm.bing.net/th?id=OIP.L7p5oOjMw_Wmn_ta8Y8wOAHaLH&w=200&h=300&c=7",
  "https://tse3.mm.bing.net/th?id=OIP.bxANBol8UouhsbTDmiNGiQHaLL&w=200&h=302&c=7",
  "https://tse3.mm.bing.net/th?id=OIP.40YdU1lR2EQdFRfSxnTERQHaHa&w=200&h=200&c=7",
  "https://tse4.mm.bing.net/th?id=OIP.IYEWEUWRELxbLkWruhNJnQHaKI&w=200&h=273&c=7",
  "https://tse3.mm.bing.net/th?id=OIP.ZfYHb383Tk0kUMP-XsfWegHaJI&w=200&h=246&c=7",
  "https://tse3.mm.bing.net/th?id=OIP.PzUuwgaWbJLk4-1dwvEhAgHaFj&w=355&h=355&c=7",
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
          <Link to="/allbooks"><button className="header-btn">Explore books</button></Link>
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
