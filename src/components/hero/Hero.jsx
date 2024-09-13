
import heroBgm from "../../images/hero.jpg";

import "./Hero.css";

function Hero() {
  const items = [
    "Goa",
    "Jim Corbett",
    "Udaipur",
    "Jaipur",
    "Pune",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Lucknow",
    "Hyderabad",
  ];

  return (
    <div className="heroBgm">
      <img className="heroBgm" src={heroBgm} alt="hero" />
      <div className="heroInput">
      </div>
    </div>
  );
}

export default Hero;
