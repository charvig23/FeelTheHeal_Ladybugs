import React, { useState, useEffect } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';

function Landing() {
    return (
        <>
        <Header />
        <div className='landing-Container'>
            <div className='left-landing'>
                <img src={'9.avif'} alt='' />
            </div>
            <div className="right-landing">
                <div className='content-Landing'>
                    <h1>Recover, Recure and Revive.</h1>
                    <Link to= "/Signup"><button className='styled-button'>Proceed <span>&#8594;</span></button></Link>
                </div>
            </div>
        </div>
        </>
    );
    }

function App() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
  
  export default App;
