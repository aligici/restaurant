import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShoppingCart, faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <header className="landing-header">
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the best cuisine from the comfort of your home.</p>
        <a href="#menu" className="cta-button">View Menu</a>
      </header>
      <section className="features">
        <div className="feature">
        <a href="#menu">
          <FontAwesomeIcon icon={faUtensils} className="feature-icon" />
          <h2>Delicious Menu</h2>
          <p>Explore a variety of dishes crafted by our expert chefs.</p>
          </a>
          </div>
        <div className="feature">
         <a href='#menu'><FontAwesomeIcon icon={faShoppingCart} className="feature-icon" />
          <h2>Easy Online Ordering</h2>
          <p>Order your favorite meals online and get them delivered to your door.</p>
          </a>
        </div>
        <div className="feature">
          <a href='#reservation'>
          <FontAwesomeIcon icon={faCalendarAlt} className="feature-icon" />
          <h2>Reserve a Table</h2>
          <p>Book a table in advance and enjoy a seamless dining experience.</p>
          </a>
        </div>
        <div className="feature">
          <a href='#menu'>
          <FontAwesomeIcon icon={faStar} className="feature-icon" />
          <h2>User Reviews</h2>
          <p>Read reviews from our satisfied customers and leave your own.</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
