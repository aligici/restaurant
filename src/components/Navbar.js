import React from 'react';
import './Navbar.css';
import CartIcon from "./AddToCart";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1> <a href="#">Restaurant</a></h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#menu">Order</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><CartIcon /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
