import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Import the CSS file
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
  console.log(isLoggedIn)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Book Store</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/allbooks" className="navbar-link">All Books</Link>
          <Link to="/sign-in" className="navbar-link">Sign In</Link>
          <Link to="/sign-up" className="navbar-link">Sign Up</Link>
          {isLoggedIn && (
            <>
              <Link to="/profile" className="navbar-link">Profile</Link>
              <Link to="/cart" className="navbar-link">Cart</Link>
            </>
          )}
        </div>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/allbooks" className="text-gray-300 hover:text-white">All Books</Link>
          <Link to="/sign-in" className="text-gray-300 hover:text-white">Sign In</Link>
          <Link to="/sign-up" className="text-gray-300 hover:text-white">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
