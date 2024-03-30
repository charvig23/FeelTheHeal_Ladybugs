import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear input fields after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <Header/>
    <div className='body'>
    <div className='login-container'>
  <div className="login-form-container" style={{height: '56%'}}>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label className='labelLogin' htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          <label className='labelLogin' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="email address"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='labelLogin' htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className='buttonLogin' type="submit">Sign up</button>
        <div className='haventsign' ><h5>Don't have account? <Link to= '/Login'>login</Link></h5></div>
      </form>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}


export default Signup;
