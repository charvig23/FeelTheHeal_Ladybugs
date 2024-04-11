import React from 'react';
import { Stack as BootstrapStack, Dropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Stack({ imageUrl, _id, name, location, disasterType, createdAt, buttonTextView}) {
  const navigate = useNavigate();
  const [statusChanged, setStatusChanged] = useState(false);
  const [statusText, setStatusText] = useState('');
  const handleViewDetailsClick = () => {
    navigate(`/application/${_id}`);
  };

  const handleUpdateStatus = async (status) => {
    try {
      await axios.put(`http://localhost:4000/api/application/${_id}`, { status,review:true },{withCredentials: true});
      setStatusChanged(true);
      setStatusText(`Status: ${status === 'approved' ? 'Approved' : 'Rejected'}`);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <BootstrapStack direction="horizontal" gap={3} className="stack-item">
      {/* Application Details */}
      <div className="stack-description">
      {imageUrl && (
          <img src={imageUrl} alt="Application Image" style={{ width: '100px', height: '100px',borderRadius: '5px' }} />
        )}
      <div className="stack-details">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Disaster Type: {disasterType}</p>
        <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
      </div>
      </div>

      {/* View Details Button */}
      <Button variant="primary" className="stack-button ms-auto" onClick={handleViewDetailsClick}>
        {buttonTextView}
      </Button>

      {!statusChanged && (
        <Button variant="success" onClick={() => handleUpdateStatus('approved')}>
          Approve
        </Button>
      )}
      {/* Reject Button */}
      {!statusChanged && (
        <Button variant="danger" onClick={() => handleUpdateStatus('rejected')}>
          Reject
        </Button>
      )}
      {/* Display status */}
      {statusChanged && (
        <div>{statusText}</div>
      )}
    </BootstrapStack>
  );
}

export default Stack;
