import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Galleria } from 'primereact/galleria';
import { vendorData } from '../../Data';
import './DetailedCard.css';

const DetailedCard = () => {
     const { id } = useParams();
     console.log(id);
     const resort = vendorData.find(resort => resort.id == id);
     console.log(resort);
     const [formData, setFormData] = useState({
          name: '',
          phone: '',
          email: '',
          functionDate: '',
          guests: '',
          rooms: '',
          functionType: '',
     });
     const responsiveOptions = [
          {
               breakpoint: '991px',
               numVisible: 4
          },
          {
               breakpoint: '767px',
               numVisible: 3
          },
          {
               breakpoint: '575px',
               numVisible: 1
          }
     ];

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log(formData);
     };

     const itemTemplate = (item) => {
          return (
               <img src={item} alt={resort.name} style={{ width: '100%', borderRadius: '10px' }} />
          );
     };

     const thumbnailTemplate = (item) => {
          return (
               <img src={item} alt={resort.name} style={{ width: '100%', borderRadius: '10px' }} />
          );
     };
     console.log(resort.rooms)

     return (
          <div className="cardDetailedContainer">
               <div className="imageSlider" >
                    <Galleria value={resort.pics} showItemNavigators responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px', width: "100%"}}
                         item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
                    <div className="detailsContainer1" >
                         <h2>{resort.name}</h2>
                         <p><strong>Description:</strong> {resort.desc}</p>
                         <p><strong>Location:</strong> {resort.location}</p>
                         <p><strong>Rating:</strong> {resort.rating}</p>
                         <p><strong>Guests Capacity:</strong> {resort.guests}</p>
                         <p><strong>Rooms Available:</strong> {resort.rooms}</p>
                    </div>
               </div>
               <div className="detailsContainer" >

                    <h3>Pricing Information</h3>
                    <p><strong>Price (Veg):</strong> ₹ {Intl.NumberFormat('en-IN').format(resort.price[0])} per plate</p>
                    <p><strong>Price (Non-Veg):</strong> ₹ {Intl.NumberFormat('en-IN').format(resort.price[1])} per plate</p>
                    <button className='viewContact' onClick={() => alert("Contact Info Displayed")}>View Contact</button>

                    <h3>Check Availability</h3>
                    <form className='cardForm' onSubmit={handleSubmit}>
                         <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                         <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                         <input type="date" name="functionDate" onChange={handleChange} required />
                         <input type="number" name="guests" placeholder="Number of Guests" onChange={handleChange} required />
                         <input type="number" name="rooms" placeholder="Number of Rooms" onChange={handleChange} required />
                         <select name="functionType" className='funcType' onChange={handleChange} required>
                              <option value="">Select Function Type</option>
                              <option value="prewedding">Pre-Wedding</option>
                              <option value="wedding">Wedding</option>
                              <option value="entire_event">Entire Wedding Event</option>
                         </select>
                         <button type="submit">Check Availability and Prices</button>
                    </form>
               </div>
          </div>
     );
};

export default DetailedCard;