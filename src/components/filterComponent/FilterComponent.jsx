import React, { useState, useEffect } from 'react';
import './FilterComponent.css';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { FaFilter } from 'react-icons/fa';
import { RiCloseLargeLine } from "react-icons/ri";

const FilterComponent = ({ flag, city, setCity, sortBy, setSortBy, dates, setDates, rating, setRating, guests, setGuests }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const cities = ['Goa', 'Jim Corbett', 'Udaipur', 'Jaipur', 'Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Lucknow', 'Hyderabad'];
  
  const sortOptions = [
    { label: 'Price - Low to High', value: 'pricelowtohigh' },
    { label: 'Rating', value: 'ratinghightolow' },
    { label: 'Price - High to Low', value: 'pricehightolow' },
    { label: 'Alphabetical - A to Z', value: 'nameatoz' },
    { label: 'Alphabetical - Z to A', value: 'nameztoa' },
  ];
  if (flag === 'resort') {
    sortOptions.push({ label: 'Price - Low to High (Non-Veg)', value: 'pricelowtohighnonveg' });
    sortOptions.push({ label: 'Price - High to low (Non-Veg)', value: 'pricehightolownonveg' });
    sortOptions.push({ label: 'No. of guests (Least)', value: 'guestsleast' })
    sortOptions.push({ label: 'No. of guests (Most)', value: 'guestsmost' });
    sortOptions.push({ label: 'No. of most Rooms', value: 'mostrooms' });
    sortOptions.push({ label: 'No. of least Rooms', value: 'leastrooms' });
  }
  const ratingOptions = [
     { label: '4.5 or more', value: '4.5' },
     { label: '3 or more', value: '3' },
     { label: '2 or more', value: '2' },
     { label: '1 or more', value: '1' },
   ];

  const today = new Date();
  const nextYear = new Date(today);
  nextYear.setFullYear(today.getFullYear() + 1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 620) {
        setIsFilterVisible(false);
      } else {
        setIsFilterVisible(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(city);
    setSortBy(sortBy);
    if (window.innerWidth <= 620) setIsFilterVisible(false);
  };

  const handleClearFilters = () => {
    setCity('');
    setSortBy('');
    setDates([]);
    setCity('');
    setSortBy('');
    setRating('');
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className='filterPage'>
      {window.innerWidth <= 620 && (
        <button
          className="filterToggleButton"
          onClick={toggleFilterVisibility}
          style={{ display: 'block', marginBottom: '10px' }}
        >
          {isFilterVisible ? <RiCloseLargeLine/> : <FaFilter/>}
        </button>
      )}

      {isFilterVisible && (
        <div className="filterComponent">
          <h2> </h2>
          <form onSubmit={handleSubmit} className="filterForm">
            <div className="filterDropdown">
              <Dropdown
                value={city}
                onChange={(e) => setCity(e.value)}
                options={cities}
                placeholder="Select a City"
                className="w-full md:w-14rem"
              />
            </div>

            <div className="filterDropdownSort">
              <Dropdown
                value={sortBy}
                onChange={(e) => setSortBy(e.value)}
                options={sortOptions}
                placeholder="Sort by"
                className="w-full md:w-14rem"
              />
            </div>

            <div className="ratingSort">
              <Dropdown
                value={rating}
                onChange={(e) => setRating(e.value)}
                options={ratingOptions}
                placeholder="Rating"
                className="w-full md:w-14rem"
              />
            </div>

            <div className="calendarWrapper">
              <Calendar
                value={dates}
                onChange={(e) => setDates(e.value)}
                selectionMode="range"
                readOnlyInput
                minDate={today}
                maxDate={nextYear}
                hideOnRangeSelection
                placeholder="Select Date Range"
              />
            </div>

            <div className="filterButtons">
            {window.innerWidth <= 620 && <button type="submit" className="filterButton">Apply Filters</button>}
              <button type="button" className="clearButton" onClick={handleClearFilters}>Clear All</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
