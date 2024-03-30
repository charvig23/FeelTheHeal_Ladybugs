import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Login/Signup.js';
import Donation from './Components/Donation/Donation.js';
import DonationForm from './Components/DonationForm/DonationForm.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/DonationForm" element={<DonationForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
