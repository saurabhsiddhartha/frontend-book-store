import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'
import axios from 'axios';
import BookCard from './BookCard';
import Loader from '../loader/Loader';

const Home = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/ap1/v1/get-recent-book'); 
                setData(response.data.data) 

            } catch (error) {
                console.error("Error fetching book data:", error);
            }
        };

        fetchBookData();
    }, []);
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-cover" style={{ backgroundImage: `url('/homeImage.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <h1 className="homepage">Welcome to our Bookstore</h1>
                <Link to="/allbooks" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Discover Books</Link>
            </div>
            <h1 id='recent-book-heading'>Recently Added Books</h1>
            <div className="book-cards-container"> 
                    {
                     !Data ? <Loader/> :
                        Data.map((item, i) => (
                        <div key={i}>
                        <BookCard key={i} data={item} />
                        </div>

                        ))
                    } 
            </div>
        </>
    );
};

export default Home;
