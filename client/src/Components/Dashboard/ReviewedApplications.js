import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from './ReviewedStack.js';
import { useNavigate } from 'react-router-dom';

function ReviewedApplications() {
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate();

    const handleViewDetailsClick = (_id) => {
        navigate(`/application/${_id}`); 
      };

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/reviewedApplications', { withCredentials: true });
                setApplications(response.data.data);
            } catch (error) {
                console.error('Error fetching reviewed applications:', error);
            }
        };

        fetchApplications();
    }, []);

    return (
        <div>
            <h1>Reviewed Applications</h1>
            <div className="stack-container">
                {applications.map(app => (
                    <Stack
                        key={app._id}
                        imageUrl={app.proofs[0].url}
                        _id={app._id}
                        name={app.contactDetails.name}
                        location={app.location}
                        disasterType={app.typeOfDisaster}
                        createdAt={app.createdAt}
                        buttonText='View Details' onClick={() => handleViewDetailsClick(app._id)}
                        statusText={app.status}
                        handleViewDetails={() => {}}
                    />
                ))}
            </div>
        </div>
    );
}

export default ReviewedApplications;
