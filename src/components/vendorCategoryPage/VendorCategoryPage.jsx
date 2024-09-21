import './VendorCategoryPage.css';
import CardComponent from "../heroCard/CardComponent";
import FilterComponent from '../filterComponent/FilterComponent';
import { vendorData } from '../../Data';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function VendorCategoryPage() {
     const category = useParams().category;
     const [city, setCity] = useState('');
     const [rating, setRating] = useState('');
     const [sortBy, setSortBy] = useState('');

     const filteredVendors = vendorData
          .filter(vendor => {
               return city ? vendor.location === city : true;
          })
          .filter(vendor => {
               return rating ? vendor.rating >= rating : true;
          })
          .sort((a, b) => {
               if (sortBy === 'pricehightolow') {
                    return b.price[0] - a.price[0];
               }
               if (sortBy === 'pricelowtohigh') {
                    return a.price[0] - b.price[0];
               }
               if (sortBy === 'ratinghightolow') {
                    return b.rating - a.rating;
               }
               if (sortBy === 'nameatoz') {
                    return a.name.localeCompare(b.name);
               }
               if (sortBy === 'nameztoa') {
                    return b.name.localeCompare(a.name);
               }
          });

     return (
          <div className="heroCategoryPage">
               <div className='filterPart'>
                    <FilterComponent setCity={setCity} setRating={setRating} setSortBy={setSortBy} />
               </div>
               

               <div className='parentFilterandCards'>
                    <div className='cardList'>
                         {filteredVendors.filter(vendor => vendor.category === category).map((vendor, index) => (
                              <CardComponent
                                   key={index}
                                   props={{
                                        img: vendor.pics[0],
                                        name: vendor.name,
                                        rating: vendor.rating,
                                        location: vendor.location,
                                        price: vendor.price[0],
                                        desc: vendor.desc
                                   }}
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default VendorCategoryPage;
