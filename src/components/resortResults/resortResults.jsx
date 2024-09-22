import './resortResults.css';
import CardComponent from "../heroCard/CardComponent";
import FilterComponent from '../filterComponent/FilterComponent';
import { resortsData } from '../../Data';
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function ResortResults() {
     const location = useLocation();
     const { city: initialCity, dates: initialDates, guests: initialGuests, rooms: initialRooms } = location.state || {}; // Use dates array

     const [city, setCity] = useState(initialCity || '');
     const [dates, setDates] = useState(initialDates || []);  // Handle dates as an array
     const [guests, setGuests] = useState(initialGuests || 1);
     const [rooms, setRooms] = useState(initialRooms || 1);
     const [rating, setRating] = useState('');
     const [sortBy, setSortBy] = useState('');
     const [currentPage, setCurrentPage] = useState(1);
     const [cardsPerPage, setCardsPerPage] = useState(12);

     useEffect(() => {
          const updateCardsPerPage = () => {
               if (window.innerWidth <= 620) {
                    setCardsPerPage(9);
               } else {
                    setCardsPerPage(12);
               }
          };

          window.addEventListener('resize', updateCardsPerPage);
          updateCardsPerPage();

          return () => window.removeEventListener('resize', updateCardsPerPage);
     }, []);

     const filteredResorts = useMemo(() => {
          const [startDate, endDate] = dates;  // Extract start and end dates from dates array
          return resortsData
               .filter(resort => city ? resort.location === city : true)
               .filter(resort => rating ? resort.rating >= rating : true)
               .filter(resort => guests ? resort.guests >= guests : true)
               .filter(resort => rooms ? resort.rooms >= rooms : true)
               .filter(resort => {
                    if (dates.length === 2) {
                         return resort.datesoccupied ? resort.datesoccupied.every(date => {
                              const dateToCheck = new Date(date);
                              console.log(city, dateToCheck, startDate, endDate);
                              return dateToCheck < startDate || dateToCheck > endDate;
                         }) : true;
                    }
                    return true;
               })
               .sort((a, b) => {
                    if (sortBy === 'pricehightolow') return b.price[0] - a.price[0];
                    if (sortBy === 'pricelowtohigh') return a.price[0] - b.price[0];
                    if (sortBy === 'pricelowtohighnonveg') return a.price[1] - b.price[1];
                    if (sortBy === 'pricehightolownonveg') return b.price[1] - a.price[1];                    
                    if (sortBy === 'ratinghightolow') return b.rating - a.rating;
                    if (sortBy === 'nameatoz') return a.name.localeCompare(b.name);
                    if (sortBy === 'nameztoa') return b.name.localeCompare(a.name);
                    if (sortBy === 'guestsmost') return b.guests - a.guests;
                    if (sortBy === 'guestsmost') return a.guests - b.guests;
                    if (sortBy === 'mostrooms') return b.rooms - a.rooms;
                    if (sortBy === 'leastrooms') return a.rooms - b.rooms;
                    return 0;
               });
     }, [city, rating, sortBy, dates, guests, rooms]);

     // Calculate the total number of pages
     const totalPages = Math.ceil(filteredResorts.length / cardsPerPage);

     // Slice the resorts to display on the current page
     const currentResorts = filteredResorts.slice(
          (currentPage - 1) * cardsPerPage,
          currentPage * cardsPerPage
     );

     return (
          <div className="vendorCategoryGrid">
               <div className="filterPart">
                    <FilterComponent
                         flag="resort"
                         city={city}
                         setCity={setCity}
                         rating={rating}
                         setRating={setRating}
                         sortBy={sortBy}
                         setSortBy={setSortBy}
                         dates={dates}
                         setDates={setDates}
                    />
               </div>
               <div className='mainDiv'>
                    <div className="cardList">
                         {currentResorts.map((resort, index) => (
                              <CardComponent
                                   key={resort.id}
                                   props={{
                                        resort: true,
                                        img: resort.pics[0],
                                        name: resort.name,
                                        rating: resort.rating,
                                        location: resort.location,
                                        vegprice: `${Intl.NumberFormat('en-IN').format(resort.price[0])}`,
                                        nonvegprice: `${Intl.NumberFormat('en-IN').format(resort.price[1])}`,
                                        guests: resort.guests,
                                        rooms: resort.rooms,
                                   }}
                              />
                         ))}
                    </div>

                    <div className="pagination">
                         {/* Previous button, disabled if on the first page */}
                         {currentPage > 1 && (
                              <button onClick={() => setCurrentPage(currentPage - 1)}>
                                   Previous
                              </button>
                         )}

                         {/* Next button, disabled if on the last page */}
                         {currentPage < totalPages && (
                              <button onClick={() => setCurrentPage(currentPage + 1)}>
                                   Next
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
}

export default ResortResults;
