import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from './ReviewedStack.js';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

function ReviewedApplications() {
    const [applications, setApplications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [stacksPerPage] = useState(5); // Adjust this value according to your preference
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

    // Logic to paginate applications
    const indexOfLastStack = currentPage * stacksPerPage;
    const indexOfFirstStack = indexOfLastStack - stacksPerPage;
    const currentStacks = applications.slice(indexOfFirstStack, indexOfLastStack);

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Pagination items
    const paginationItems = [];
    for (let number = 1; number <= Math.ceil(applications.length / stacksPerPage); number++) {
        paginationItems.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <>
            <div>
            <div className='Dona-page'>
                <h1 className='Dona-head'>Reviewed Applications</h1>
                <div className="stack-container">
                    {currentStacks.map(app => (
                        <Stack
                            key={app._id}
                            imageUrl={app.proofs[0].url}
                            _id={app._id}
                            name={app.contactDetails.name}
                            location={app.location}
                            disasterType={app.typeOfDisaster}
                            createdAt={app.createdAt}
                            buttonText='View Details'
                            onClick={() => handleViewDetailsClick(app._id)}
                            statusText={app.status}
                            handleViewDetails={() => {}}
                        />
                    ))}
                </div>
                {/* Pagination */}
                <div className="pagination-container">
                    <Pagination>{paginationItems}</Pagination>
                </div>
            </div>
            </div>
        </>
    );
}

export default ReviewedApplications;
