import React, { useState } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import Sidebar from './Sidebar.js'; 
import { FiX } from 'react-icons/fi'; 
import { FaAngleRight } from 'react-icons/fa'; 
import './Dashboard.css';

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false); // State to handle sidebar collapse

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
        <Header/>
        <div className='Dashboard-body'>
            <div className="dashboard-container">
                <Sidebar collapsed={collapsed}/> {/* Render the Sidebar component */}
                <div className="content">
                    {/* Toggle button with icon */}
                    <button onClick={handleToggleSidebar}>
                        {collapsed ? <FaAngleRight /> : <FiX />}
                    </button>
                    {/* Main content goes here */}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Dashboard;
