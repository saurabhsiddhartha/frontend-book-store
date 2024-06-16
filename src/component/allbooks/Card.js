import React from 'react';
import { Link } from 'react-router-dom'; 
import './Card.css';

const Card = ({ data }) => {
    const { url, title, author, price, desc, _id } = data; // Ensure the correct prop names

    return (
        <div className="card-container">
            <Link to={`/get-book-by-id/${_id}`} className="card-link"> {/* Provide the correct path */}
                <img src={url} alt={title} className="card-image" />
                <div className='card-detail'> 
                    <h2 className="card-title">{title}</h2>
                    <h5 className="card-author">Author: {author}</h5>
                    <h1 className="card-price">Price: ${price}</h1>
                    <p className="card-description">{desc}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
