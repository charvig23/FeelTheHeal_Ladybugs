import React, { useState } from 'react';
import './Donation.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// Sample data for listings
const listingsData = [
  { 
    id: 1, 
    image: '6.jpg', 
    description: 'This earthquake caused significant damage to infrastructure and homes in the affected areas.', 
    type: 'Earthquake', 
    location: 'Nepal, India', 
    compensation: 1000, 
    deadline: '2024-04-15', 
    tags: ['Earthquake', 'emergency'], 
  },
  { 
    id: 2, 
    image: '30.avif', 
    description: 'This earthquake caused significant damage to infrastructure and homes in the affected areas.', 
    type: 'Tsunami', 
    location: 'Nepal, India', 
    compensation: 2000, 
    deadline: '2024-04-25', 
    tags: ['Tsunami', 'emergency'], 
  },
  { 
    id: 3, 
    image: '29.jpeg', 
    description: 'This earthquake caused significant damage to infrastructure and homes in the affected areas.', 
    type: 'Flood', 
    location: 'Delhi, India', 
    compensation: 3000, 
    deadline: '2024-04-5', 
    tags: ['flood', 'emergency'], 
  },
  // Add more listing data as needed
];

const Donation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredListings, setFilteredListings] = useState(listingsData);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterListings(e.target.value);
  };

  // Function to filter listings based on search term
  const filterListings = (term) => {
    const filtered = listingsData.filter(listing =>
      listing.tags.some(tag => tag.includes(term.toLowerCase())) ||
      listing.type.toLowerCase().includes(term.toLowerCase()) ||
      listing.location.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredListings(filtered);
  };

  // Function to sort listings by deadline
  const sortByDeadline = () => {
    const sortedListings = [...filteredListings].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    setFilteredListings(sortedListings);
  };

  // Function to sort listings by compensation
  const sortByCompensation = () => {
    const sortedListings = [...filteredListings].sort((a, b) => a.compensation - b.compensation);
    setFilteredListings(sortedListings);
  };

  return (
    <>
    <Header/>
        <div className="listings-container">
        <div className='img-container'>
            <h1 className='donation-heading'>Donate to people in need</h1>
          <input type="text" placeholder="Search by type of disaster and location" value={searchTerm} onChange={handleSearchChange} />
          <div>
            <div className="sort-buttons">
              <button className="donate-sort-buttons" onClick={sortByDeadline}>Sort by Deadline</button>
              <button className="donate-sort-buttons" onClick={sortByCompensation}>Sort by Compensation</button>
            </div>
          </div>
          {filteredListings.map(listing => (
            <ListingItem key={listing.id} listing={listing} />
          ))}
        </div>  
      </div>
      <Footer/>
    </>

  );
};

const ListingItem = ({ listing }) => {
  return (
    <div className="listing-item">
      <div className="listing-image">
        <img src={listing.image} alt={listing.type} />
      </div>
      <div className="listing-details">
        <h2>{listing.type}</h2>
        <p>Description: {listing.description}</p>
        <p>Location: {listing.location}</p>
        <p>Compensation: ${listing.compensation}</p>
        <p>Deadline: {listing.deadline}</p>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default Donation;
