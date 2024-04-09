import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ApplicationDetails.css';

function AppDetails() {
  const { id } = useParams();
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/application/${id}`,{withCredentials: true});
        console.log('API Response:', response.data);
        setApplication(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching application details:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchApplication();
  }, [id]);

  console.log('Application:', application);

  if (!application) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-details">
      <h1>Application Details</h1>
      <p>Name: {application.contactDetails?.name}</p>
      <p>Email: {application.contactDetails?.email}</p>
      <p>Phone: {application.contactDetails?.phone}</p>
      <p>Location: {application.location}</p>
      <p>Type of Disaster: {application.typeOfDisaster}</p>
      <p>Details of Loss: {application.detailsOfLoss}</p>
      <p>Compensation Amount: {application.compensationAmount}</p>
      <p>Date of Disaster: {new Date(application.dateOfDisaster).toLocaleDateString()}</p>
      <p></p>
    </div>
  );
}

export default AppDetails;
