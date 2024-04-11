import React from 'react';
import './UserDashboard.css';



const UserDashboard = () => {
    const bookedAppointments = [
      { date: '2024-04-12', time: '10:00 AM',Doctor: 'John Doe' },
      { date: '2024-04-15', time: '2:00 PM',Doctor: 'John Doe' },
      { date: '2024-04-12', time: '10:00 AM',Doctor: 'John Doe' }
      
    ];
  
    const donationsMade = [
      { amount: '$50', date: '2024-04-01', To:'Sam Balt' },
      { amount: '$100', date: '2024-04-05', To:'Sam Balt'},
      
    ];
  
    const donationsApplied = [
      { Description: ' Family directly impacted by earthquake seeks urgent assistance.',amount: '$30', date: '2024-04-02' }
      
    ];
  return (
    <>
    <div className='ds-body'>
    <div className="user-dashboard">
        <div className='U-dashboard-heading'><h1>User Dashboard</h1></div>
      <div className="dashboard-header">
        <div className="user-info">
          <img src="https://via.placeholder.com/50" alt="User" className="user-image" />
          <div className="user-details">
            <p className="username">John Doe</p>
            <p className="email">john@example.com</p>
          </div>
        </div>
      </div>
      </div>
      
      <section className="booked-appointments">
        <h2>Booked Appointments</h2>
        {bookedAppointments.map((appointment, index) => (
          <div  key={index}>
            <p className="list-text">Date: {appointment.date}</p>
            <p className="list-text">Time: {appointment.time}</p>
            <p className="list-text">Doctor: {appointment.Doctor}</p>
          </div>
        ))}
      </section>
      <div className="donation-head">
      <h1>Donations</h1></div>
      <section className="donations">
        <div className="donations-made">
          <h2>Donations Made</h2>
          {donationsMade.map((donation, index) => (
            <div  key={index}>
              <p className="list-text">To: {donation.To}</p>
              <p className="list-text">Amount: {donation.amount}</p>
              <p className="list-text">Date: {donation.date}</p>
              
            </div>
          ))}
        </div>
        <div className="donations-applied">
          <h2>Donations Applied</h2>
          {donationsApplied.map((donation, index) => (
            <div  key={index}>
                <p className="list-text">Description:{donation.Description}</p>
              <p className="list-text">Amount: {donation.amount}</p>
              <p className="list-text">Date: {donation.date}</p>
              
            </div>
          ))}
        </div>
        
      </section>
      </div>
      </>
  );
};

export default UserDashboard;
