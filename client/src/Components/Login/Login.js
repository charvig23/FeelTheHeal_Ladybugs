import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login/user", {
          email: email, 
          password: password,
      })
      if (response.data.msg === "Login successful") {
          localStorage.setItem('isLoggedIn', 'true');
          toast.success("Login successful");
          navigate('/donation'); 
      } else {
          toast.error("Failed to login: " + response.data.msg);
      }
  }
  catch (e) {
      setError(e.response.data.msg);
  }
  };

  return (
    <>
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
