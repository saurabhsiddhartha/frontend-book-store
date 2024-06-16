import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ViewBookDetail.css'

const ViewBookDetail = () => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();



    useEffect(() => {
        console.log(id)
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/ap1/v1/get-book-by-id/${id}`);
                const data = response.data.data;
                setBook(data);
                console.log(book.url)


            } catch (error) {
                setError('Error fetching the book details');
                console.error('Error fetching the book details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [book.id]);

    if (loading) {
        return <h1>Loading book details...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className="book-detail-container">
            {book ? (
                <div className="book-detail-card">
                    <img src={book.url} alt={book.title} className="book-image" />
                    <div className="book-info">
                        <h1>{book.title}</h1>
                        <p className="book-author">Author: {book.auther}</p>
                        <p className="book-price">Price: ${book.price}</p>
                        <p className="book-description">{book.description}</p>
                        <div className="book-actions">
                            <button className="btn buy-now">Buy Now</button>
                            <button className="btn add-to-cart">Add to Cart</button>
                            <button className="btn add-to-favourites">Add to Favourites</button>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Book not found</h1>
            )}
        </div>
    );
};

export default ViewBookDetail;
