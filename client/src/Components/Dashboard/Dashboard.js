import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.js'; 
import { FiX } from 'react-icons/fi'; 
import { FaAngleRight } from 'react-icons/fa'; 
import './Dashboard.css';
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
                  
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
