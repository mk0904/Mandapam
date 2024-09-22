import React, { useState, useEffect } from 'react';
import './Home.css';
import HomeImg from '../../images/home1.png';
import MobileImg from '../../images/home3.png';

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
  );
};

export default Home;
