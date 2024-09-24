import './VendorCategoryPage.css';
import CardComponent from "../heroCard/CardComponent";
import FilterComponent from '../filterComponent/FilterComponent';
import { vendorData } from '../../Data';
import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

function VendorCategoryPage() {
    const category = useParams().category;
    const [city, setCity] = useState('');
    const [rating, setRating] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [dates, setDates] = useState(null);  // This will store the start and end date as an array
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

    // Memoized filtered and sorted vendors to avoid recalculating on each render
    const filteredVendors = useMemo(() => {
        return vendorData
            .filter(vendor => vendor.category === category)
            .filter(vendor => city ? vendor.location === city : true)
            .filter(vendor => rating ? vendor.rating >= rating : true)
            .filter(vendor => {
                if (dates && dates.length === 2) {
                    const [startDate, endDate] = dates;

                    // Check if the vendor's occupied dates are outside the selected date range
                    return vendor.datesoccupied ? vendor.datesoccupied.every(occupiedDate => {
                        const dateToCheck = new Date(occupiedDate);
                        return dateToCheck < startDate || dateToCheck > endDate;
                    }) : true;
                }
                return true;  // If no dates are selected, show all vendors
            })
            .sort((a, b) => {
                if (sortBy === 'pricehightolow') return b.price[0] - a.price[0];
                if (sortBy === 'pricelowtohigh') return a.price[0] - b.price[0];
                if (sortBy === 'ratinghightolow') return b.rating - a.rating;
                if (sortBy === 'nameatoz') return a.name.localeCompare(b.name);
                if (sortBy === 'nameztoa') return b.name.localeCompare(a.name);
                return 0;
            });
    }, [city, rating, sortBy, dates]);  // Make sure dates are included in the dependency array

    // Pagination Logic
    const indexOfLastVendor = currentPage * cardsPerPage;
    const indexOfFirstVendor = indexOfLastVendor - cardsPerPage;
    const currentVendors = filteredVendors.slice(indexOfFirstVendor, indexOfLastVendor);

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
                    dates={dates}
                    setDates={setDates}  // Ensure the dates array is passed to the FilterComponent
                />
            </div>
            <div className='mainDiv'>
                <div className="cardList">
                    {currentVendors.map((vendor, index) => (
                        <CardComponent
                            key={index}
                            props={{
                                vendors: true,
                                category: category,
                                id: vendor.id,
                                category: category,
                                img: vendor.pics,
                                name: vendor.name,
                                rating: vendor.rating,
                                location: vendor.location,
                                price: vendor.price[0],
                                desc: vendor.desc
                            }}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    {currentPage > 1 && (
                        <button onClick={() => setCurrentPage(currentPage - 1)}>
                            Previous
                        </button>
                    )}
                    {currentPage < Math.ceil(filteredVendors.length / cardsPerPage) && (
                        <button onClick={() => setCurrentPage(currentPage + 1)}>
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VendorCategoryPage;
