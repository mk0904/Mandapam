import React from 'react';
import './Home.css';
import HomeImg from '../../images/home1.png';

const Home = () => {
  return (
    <div className="homeContainer">
      <img src={HomeImg} alt="Mandapam" className="homeImage" />
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
