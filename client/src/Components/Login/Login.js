import React, { useState, useEffect} from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header.js';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      }, {
        withCredentials: true 
      });
  
      setCookie('token', response.data.token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', response.data.role);
      console.log(response.data.role);
  
      if (response.data.msg === "Login successful") {
        if (response.data.role === "admin") {
          toast.success("Admin login successful");
          navigate('/Dashboard');
        } else {
          toast.success("User login successful");
          navigate('/donation');
        }
      } else {
        toast.error("Failed to login: " + response.data.msg);
      }
    } catch (error) {
      setError(error.response.data.msg);
    }
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
        {error && <p className="error-msg">{error}</p>}
        <div className='haventsign' ><h5>Don't have account? <Link to='/Signup'> Sign up</Link></h5></div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
}


export default Login;
