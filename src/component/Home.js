import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'

const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-cover" style={{ backgroundImage: `url('/homeImage.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <h1 className="homepage">Welcome to our Bookstore</h1>
                <Link to="/allbooks" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Discover Books</Link>
            </div>
            <h2>Recently Added Books</h2>
            <div className="book-cards-container">

                <div className="book-cards">
                    <img src="" alt="" />
                    
                </div>
            </div>
        </>
    );
};

export default Home;
