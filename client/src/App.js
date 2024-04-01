import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Login/Signup.js';
import Donation from './Components/Donation/Donation.js';
import DonationForm from './Components/DonationForm/DonationForm.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div><ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/DonationForm" element={<DonationForm/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
