import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Loader from '../../loader/Loader';

const AllBooks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/ap1/v1/get-all-book');  
        setData(response.data.data);  
      } catch (error) {
        setError(error);
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, []);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunks = chunkArray(data, 5); // Split data into chunks of 5 items each

  return (
    <div>
      <h1>All Books</h1>
      {error && <p>Error fetching data: {error.message}</p>}
      {!data.length ? <Loader /> : (
        chunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="book-row">
            {chunk.map((item, itemIndex) => (
              <div key={itemIndex} className="book-item">
                <Card data={item} />
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default AllBooks;
