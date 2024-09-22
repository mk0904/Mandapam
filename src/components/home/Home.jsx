import React, { useState, useEffect } from 'react';
import './Home.css';
import HomeImg from '../../images/home1.png';
import MobileImg from '../../images/home3.png';
import resortImg from '../../images/resort1.webp';
import catererImg from '../../images/catering.webp';
import rivaayaImg from '../../images/rivaaya.png';
import CardHome from '../cardHome/CardHome';
import planyourweddingImg from '../../images/planYourWedding.png';

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

      <CardHome Img={resortImg} Title="Resorts" Desc="your destination with your destined one..." buttonText="Book a Resort" paramVar="resorts"/>
      <CardHome Img={catererImg} Reverse="True" Title="Vendors" Desc="Best vendors...be it.. photographers, caterers, pandits, make-up artists..etc." buttonText="Find the best Vendor" paramVar="vendors"/>
      <CardHome Img={rivaayaImg} Title="Rivaaya" Desc="The traditionals that's made for you... be it dress or jwellery..." buttonText="Explore Rivaaya" paramVar="rivaaya"/>
      <CardHome Img={planyourweddingImg} Reverse="True" Title="Plan your wedding" Desc="The traditionals that's made for you... be it dress or jwellery..." buttonText="Plan it best" paramVar="plan-your-wedding"/>
    </div>
  );
};

export default Home;
