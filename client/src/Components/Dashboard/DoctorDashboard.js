import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Stack from './Stack.js'; // Import the Stack component
import './DonationDashboard.css'; // Import the CSS file

function DoctorDashboard() {
  const stacksPerPage = 7; // Number of stacks per page
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  const stacks = [
    { id: 1, description: 'Description 1', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 2, description: 'Description 2', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 3, description: 'Description 3', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 4, description: 'Description 4', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 5, description: 'Description 1', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 6, description: 'Description 2', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 7, description: 'Description 3', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 8, description: 'Description 4', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 9, description: 'Description 1', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 10, description: 'Description 2', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 11, description: 'Description 3', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
    { id: 12, description: 'Description 4', buttonText: 'View Details', dropdownOptions: ['Approve', 'Reject'] },
  ];

  // Calculate the indexes of stacks to be displayed on the current page
  const indexOfLastStack = currentPage * stacksPerPage;
  const indexOfFirstStack = indexOfLastStack - stacksPerPage;
  const currentStacks = stacks.slice(indexOfFirstStack, indexOfLastStack);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination items
  const paginationItems = [];
  for (let number = 1; number <= Math.ceil(stacks.length / stacksPerPage); number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className='Dona-page'>
        <div><h1>Doctor Applications
            </h1></div>
        <div className="stack-container">
          {/* Map over the array of stack data for the current page */}
          {currentStacks.map(stack => (
            <Stack key={stack.id} {...stack} />
          ))}

          {/* Pagination */}
          <div className="pagination-container">
            <Pagination>{paginationItems}</Pagination>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;

