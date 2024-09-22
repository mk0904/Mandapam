import './resortResults.css';
import CardComponent from "../heroCard/CardComponent";
import FilterComponent from '../filterComponent/FilterComponent';
import { resortsData } from '../../Data';
import { useState, useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Import useLocation

function ResortResults() {
     
     const location = useLocation();
     const { city: initialCity, startDate: initialStartDate, endDate: initialEndDate, guests: initialGuests, rooms: initialRooms } = location.state || {}; // Default to undefined if state not passed

     // Set initial states from location.state or use defaults
     const [city, setCity] = useState(initialCity || '');
     const [rating, setRating] = useState('');
     const [sortBy, setSortBy] = useState('');
     const [startDate, setStartDate] = useState(initialStartDate || null);
     const [endDate, setEndDate] = useState(initialEndDate || null);
     const [guests, setGuests] = useState(initialGuests || 1);
     const [rooms, setRooms] = useState(initialRooms || 1);
     const [currentPage, setCurrentPage] = useState(1);
     const [cardsPerPage, setCardsPerPage] = useState(12);

     console.log(location.state);
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
          return resortsData
              .filter(resort => city ? resort.location === city : true)
              .filter(resort => rating ? resort.rating >= rating : true)
              .filter(resort => guests ? resort.guests >= guests : true)
              .filter(resort => rooms ? resort.rooms >= rooms : true)
              .filter(resort => {
                  // Filter by dates if a date range is selected
                  if (startDate && endDate) {
                      return resort.bookedDates ? resort.bookedDates.every(date => {
                          const dateToCheck = new Date(date);
                          return dateToCheck < startDate || dateToCheck > endDate;
                      }) : true; // If bookedDates is not defined, include the resort
                  }
                  return true; // If no date range is selected, include all resorts
              })
              .sort((a, b) => {
                  if (sortBy === 'pricehightolow') return b.price[0] - a.price[0];
                  if (sortBy === 'pricelowtohigh') return a.price[0] - b.price[0];
                  if (sortBy === 'ratinghightolow') return b.rating - a.rating;
                  if (sortBy === 'nameatoz') return a.name.localeCompare(b.name);
                  if (sortBy === 'nameztoa') return b.name.localeCompare(a.name);
                  return 0;
              });
      }, [city, rating, sortBy, startDate, endDate, guests, rooms]);
      

     // Pagination Logic
     const indexOfLastResort = currentPage * cardsPerPage;
     const indexOfFirstResort = indexOfLastResort - cardsPerPage;
     const currentResorts = filteredResorts.slice(indexOfFirstResort, indexOfLastResort);
     const paginate = (pageNumber) => setCurrentPage(pageNumber);

     return (
          <div className="vendorCategoryGrid">
               <div className="filterPart">
                    <FilterComponent
                         city={city}
                         setCity={setCity}
                         rating={rating}
                         setRating={setRating}
                         sortBy={sortBy}
                         setSortBy={setSortBy}
                         startDate={startDate}
                         setStartDate={setStartDate}
                         endDate={endDate}
                         setEndDate={setEndDate}
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
                         {currentPage > 1 && (
                              <button onClick={() => paginate(currentPage - 1)}>
                                   Previous
                              </button>
                         )}
                         {currentPage < Math.ceil(filteredResorts.length / cardsPerPage) && (
                              <button onClick={() => paginate(currentPage + 1)}>
                                   Next
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
}

export default ResortResults;
