import React, { useState, useEffect } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

const Landing = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ['16.jpg', '9.avif']; 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % 2);
        }, 3000); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <>
        <Header/>
        <div className='landing-Container'>
            <div className='left-landing'>
                <img src={images[currentImage]} alt='' />
            </div>
            <div className="right-landing">
                <div className='content-Landing'>
                    <h1>Recover, Recure and Revive.</h1>
                    <Link to= "/Signup"><button className='styled-button'>Proceed <span>&#8594;</span></button></Link>
                </div>
            </div>
        </div>
        <Footer/>
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
