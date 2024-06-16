// src/SignUpForm.js
import React, { useState } from 'react';
import axios from 'axios'
import './SignUp.css';

const SignUp = () => {
  const [success, setSucess] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);

    const InsertData = async () => {
      const response = await axios.post('http://localhost:5000/ap1/v1/sign-up', formData)
      setSucess(true)
    }
    InsertData()
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      {success && <h1>Sign Up Successfully</h1>}
    </div>
  );
};

export default SignUp;
