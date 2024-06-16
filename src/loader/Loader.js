import React from 'react';
import './Loader.css'; // Ensure to create the corresponding CSS file

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;
