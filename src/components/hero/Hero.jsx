import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import DropdownCity from "../dropdown/Dropdown";
import heroBgm from "../../images/hero.jpg";
import EventDateSelector from "../calendar/Calendar";
import RoomAndVisitors from "../roomAndVisitors/roomAndVisitors";

function Hero() {
  const [city, setCity] = useState("");
  const [dates, setDates] = useState([]);  // Single state for dates as an array
  const [guests, setGuests] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [rating, setRating] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleFindResorts = (e) => {
    console.log(city, dates, guests, rooms);
    setCity(city);
    setGuests(guests);
    setRooms(rooms);
  };

  return (
    <div className="heroplan">
      <div className="heroBgm">
        <img src={heroBgm} alt="hero" />
      </div>

      <div className="heroInput">
        <div className="heroTextBox">
          <h1 className="heroTitle">Your Perfect Destination</h1>
        </div>
        <div className="heroInputDiv">
          <div className="dropDownDiv">
            <DropdownCity city={city} setCity={setCity} />
          </div>
          <div className="dateSelectorDiv">
            {/* Pass dates array directly */}
            <EventDateSelector dates={dates} setDates={setDates} />
          </div>
          <div className="peopleAndRoomDiv">
            <RoomAndVisitors guests={guests} setGuests={setGuests} rooms={rooms} setRooms={setRooms} />
          </div>
        </div>
        <NavLink
          to={{
            pathname: '/resorts/results',
          }}
          state={{ city, dates, guests, rooms, rating, sortBy }}
        >
          <button className="buttonSearchResort" onClick={handleFindResorts}>
            Find the best Resorts
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;
