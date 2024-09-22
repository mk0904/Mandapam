import React, { useState, useEffect } from 'react';
import './Home.css';
import HomeImg from '../../images/home1.png';
import MobileImg from '../../images/home3.png';
import ResortImg from '../../images/resort.webp'; // Import resort image

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 665);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 665);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>

      <div className="homeContainer">
        <img
          src={isMobile ? MobileImg : HomeImg}
          alt="Mandapam"
          className="homeImage"
        />
        <div className="imageOverlay">
          <div>
            <h1 className="imageText">mandapam</h1>
            <p className="imagedesc">your destination with your destined one...</p>
          </div>
        </div>
      </div>

      {/* New Resort Section */}
      <div className="resortSection">
        <img src={ResortImg} alt="Resort" className="resortImage" />
        <div className="resortText">
          <h2 className="resortTitle">Book your Dream Resort</h2>
          <p className="resortDesc">Marry your king or queen in your favourite palace...Destiny is destined together.</p>
          <p className="resortDesc">Shaadi karo kurbat se...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
