import React, { useState, useEffect } from 'react';
import './FilterComponent.css';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

const FilterComponent = ({ setCity, setSortBy }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(true); // Always visible on desktop
  const [selectedCity, setSelectedCity] = useState('');
  const [sortBy, setLocalSortBy] = useState('');
  const [dates, setDates] = useState(null);

  const cities = ['Goa', 'Jim Corbett', 'Udaipur', 'Jaipur', 'Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Lucknow', 'Hyderabad'];
  const sortOptions = [
    { label: 'Price - Low to High', value: 'pricelowtohigh' },
    { label: 'Rating', value: 'rating' },
    { label: 'Price - High to Low', value: 'pricehightolow' },
    { label: 'Alphabetical - A to Z', value: 'nameatoz' },
    { label: 'Alphabetical - Z to A', value: 'nameztoa' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 468) {
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
    setCity(selectedCity);
    setSortBy(sortBy);
    if (window.innerWidth <= 768) setIsFilterVisible(false);
  };

  const handleClearFilters = () => {
    setSelectedCity('');
    setLocalSortBy('');
    setDates(null);
    setCity('');
    setSortBy('');
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className='filterPage'>
      {window.innerWidth <= 768 && (
        <button 
          className="filterToggleButton" 
          onClick={toggleFilterVisibility}
          style={{ display: 'block', marginBottom: '10px' }}
        >
          {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
      )}


      {isFilterVisible && (
        <div className="filterComponent">
          <h2>Filter Options</h2>
          <form onSubmit={handleSubmit} className="filterForm">
            <div className="filterDropdown">
              <Dropdown 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.value)} 
                options={cities} 
                placeholder="Select a City" 
                className="w-full md:w-14rem" 
              />
            </div>

            <div className="filterDropdownSort">
              <Dropdown 
                value={sortBy} 
                onChange={(e) => setLocalSortBy(e.value)} 
                options={sortOptions} 
                placeholder="Sort by" 
                className="w-full md:w-14rem" 
              />
            </div>

            <div className="calendarWrapper">
              <Calendar 
                value={dates} 
                onChange={(e) => setDates(e.value)} 
                selectionMode="range" 
                readOnlyInput 
                hideOnRangeSelection 
                placeholder="Select Date Range"
              />
            </div>

            <div className="filterButtons">
              <button type="submit" className="filterButton">Apply Filters</button>
              <button type="button" className="clearButton" onClick={handleClearFilters}>Clear All</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
