import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.js'; 
import { FiX } from 'react-icons/fi'; 
import { FaAngleRight } from 'react-icons/fa'; 
import './Dashboard.css';
import BarChart from './BarChart.js';
import {jwtDecode} from 'jwt-decode';
import { useCookies } from 'react-cookie';

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false); 
    
    const navigate = useNavigate();
    
    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    const [cookies] = useCookies(['token']);

    useEffect(() => {
        const token = cookies.token || cookies.jwt;
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.role !== 'admin') {
                navigate('/login'); 
            }
        } else {
            navigate('/dashboard'); 
        }
    }, [cookies.token, navigate]);

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
            
                    <div className='dash-head'><h1>Welcome to Feel the heal</h1></div>
                    <div className='dash-big-container'>
                        <div className='dash-left-container'> <BarChart /></div>
                        <div className='dash-right-container'>
                            <div className='cont-1'>
                                <h3>10</h3>
                                <p>Number of donation applications</p>
                            </div>
                            <div className='cont-2'>
                            <h3>20</h3>
                                <p>Number of donation made</p>
                            </div>
                            <div className='cont-3'>
                            <h3>30</h3>
                                <p>Number of doctors approved</p>
                            </div>
                        </div>
                        </div>
                    
                  
                </div>
            </div>
        </div>
       
        </>
    );
};

export default Dashboard;
