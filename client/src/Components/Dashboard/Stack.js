import React from 'react';
import { Stack as BootstrapStack, Dropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Stack({ imageUrl, _id, name, location, disasterType, createdAt, buttonText, dropdownOptions, handleViewDetails, handleUpdateStatus }) {
  const navigate = useNavigate();
  const handleViewDetailsClick = () => {
    navigate(`/application/${_id}`);
  };

  const handleStatusChange = (option) => {
    handleUpdateStatus(_id, option);
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
        {buttonText}
      </Button>

      {/* Status Dropdown */}
      <Dropdown className="stack-dropdown ms-auto">
        <Dropdown.Toggle variant="success" id={`dropdown-basic-${_id}`}>
          Status
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {dropdownOptions.map((option, index) => (
            <Dropdown.Item key={index} onClick={() => handleStatusChange(option)}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </BootstrapStack>
  );
}

export default Stack;
