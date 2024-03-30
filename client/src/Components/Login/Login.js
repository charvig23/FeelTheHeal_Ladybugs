import React, { useState } from 'react';
import './Login.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your login logic
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear input fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <Header/>
    <div className='body'>
    <div className='login-container'>
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
        <button className='buttonLogin' type="submit">Login</button>
        <div className='haventsign' ><h5>Don't have account? <Link to='/Signup'> Sign up</Link></h5></div>
      </form>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}


export default Login;
