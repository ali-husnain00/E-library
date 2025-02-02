import React, { useState, useEffect, useRef } from 'react';
import './Categories.css';
import { Link } from 'react-router';

const Categories = () => {
  const [inView, setInView] = useState(false);
  const categories = [
    { id: 1, name: 'Programming', icon: 'fas fa-code' },
    { id: 2, name: 'Fiction & Literature', icon: 'fas fa-book' },
    { id: 3, name: 'Personal Development', icon: 'fas fa-users' },
    { id: 4, name: 'Science & Technology', icon: 'fas fa-flask' },
  ];

  const categoryRefs = useRef([]);

  const checkVisibility = () => {
    categoryRefs.current.forEach((categoryIcon, index) => {
      const rect = categoryIcon.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        setInView(true);
      } else {
        setInView(false);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on initial load

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className="book-categories">
      <Link to="/admin-addBooks"><button className='admin-btn'>Admin</button></Link>
      <h1>Find by category</h1>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={category.id}>
            <div
              className={`category-icon ${inView ? 'show' : ''}`}
              ref={(el) => categoryRefs.current[index] = el}
            >
              <i className={category.icon}></i>
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
