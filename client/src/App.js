import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Login/Signup.js';
import Donation from './Components/Donation/Donation.js';
import DonationForm from './Components/DonationForm/DonationForm.js';
import Modules from './Components/Modules/Modules.js';
import AppointmentPage from './Components/AppointmentPage/AppointmentPage.js';
import Home from './Components/Home/Home.js';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard.js';
import DonationDashboard from './Components/Dashboard/DonationDashboard.js';
import ApplicationDetails from './Components/Dashboard/ApplicationDetails.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Footer from './Components/Footer/Footer.js';
import ReviewedApplications from './Components/Dashboard/ReviewedApplications.js';
import UserDashboard from './Components/UserDashboard/UserDashboard.js';
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
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path='/UserDashboard' element={<UserDashboard/>}/>
        <Route path="/DonationDashboard" element={<DonationDashboard/>} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard/>} />
        <Route path="/Donation" element={<Donation />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path="/DonationForm" element={<DonationForm/>} />
        <Route path="/AppointmentPage" element={<AppointmentPage/>} />
        <Route path="/application/:id" element={<ApplicationDetails/>} />
        <Route path="/reviewedApplications" element={<ReviewedApplications/>} />
      </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
