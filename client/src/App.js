import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Donation from './Components/Donation/Donation';
import DonationForm from './Components/DonationForm/DonationForm';
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="/Signup" element={<Signup/>} />
    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/Donation" element={<Donation />} />
    //     <Route path="/DonationForm" element={<DonationForm/>} />
    //   </Routes>
    // </Router>
    
    <DonationForm/>

  );
}

export default App;
