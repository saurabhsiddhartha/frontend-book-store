import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BookCard.css';

const BookCard = ({ data }) => {
    const { url, title, auther, price, desc } = data; 

    return (
        <div className="cards">
            <Link>
            <img src={`https://imgs.search.brave.com/8HsJDmNRzc9ixVltZ1uf6W4nmL0Z9iRJh76PM8whL_E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFEYW9r/Vl92M3cvMS8wLzEw/MDN3L2NhbnZhLWdy/YXlzY2FsZS1waG90/by1hdXRvYmlvZ3Jh/cGh5LWJvb2stY292/ZXItZXRGcGl0SXJo/RDQuanBn`}/>
            <div className='card-detail'> 
            <h2>Title: {title}</h2>
            <h5>Author: {auther}</h5>
            <h1>Price: {price}</h1>
            <p>Description: {desc}</p>
            </div>
            </Link>
        </div>
    );
};

export default BookCard;
