import React from 'react';
import { Stack as BootstrapStack, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ReviewedStack({ imageUrl, _id, name, location, disasterType, createdAt, buttonText, statusText }) {
    const navigate = useNavigate();

    const handleViewDetailsClick = () => {
        navigate(`/application/${_id}`);
    };

    return (
        <>
        <BootstrapStack direction="horizontal" gap={3} className="stack-item">
            {/* Application Details */}
            <div className="stack-description">
                {imageUrl && (
                    <img src={imageUrl} className='App-Img' alt="Application Image" style={{ width: '100px', height: '100px', borderRadius: '5px' }} />
                )}
                <div className="stack-details">
                    <p><span>Name: </span>{name}</p>
                    <p><span>Location:</span> {location}</p>
                    <p><span>Disaster Type: </span>{disasterType}</p>
                    <p><span>Created At: </span>{new Date(createdAt).toLocaleDateString()}</p>
                </div>
            </div>

            {/* View Details Button */}
            <Button variant="primary" className="stack-button ms-auto" onClick={handleViewDetailsClick}>
                {buttonText}
            </Button>

            {/* Status Text */}
            <div style={{ marginRight:'30px'}} >{statusText}</div>
        </BootstrapStack>
        
        </>
    );
}

export default ReviewedStack;
