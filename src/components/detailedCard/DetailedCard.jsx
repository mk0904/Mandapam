import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Galleria } from 'primereact/galleria';
import { vendorData, resortsData } from '../../Data'; // Importing both vendorData and resortsData
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import default styles for toasts
import './DetailedCard.css';

const DetailedCard = () => {
    const { id } = useParams();
    const location = useLocation();
    const category = location.state?.category; // Access the passed category from navigation state

    // Conditionally use resortsData if the category is 'resorts', otherwise use vendorData
    const data = category === 'resorts'
        ? resortsData.find(item => item.id == id)
        : vendorData.find(item => item.id == id);

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
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate phone number (simple regex for demonstration)
        const phoneRegex = /^[0-9]{10}$/; // Example regex for 10-digit phone number
        if (!phoneRegex.test(formData.phone)) {
            toast.error('Please enter a valid phone number (10 digits).');
            return; // Exit if phone number is invalid
        }

        // Validate email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple email regex
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            return; // Exit if email is invalid
        }

        // Show success toast if all validations pass
        toast.success(`Mandapam will reach out to you shortly!!, ${formData.name}!`);
        console.log(formData); // Log form data or send it to your backend
    };

    const itemTemplate = (item) => {
        return (
            <img src={item} alt={data.name} style={{ width: '100%', borderRadius: '10px' }} />
        );
    };

    const thumbnailTemplate = (item) => {
        return (
            <img src={item} alt={data.name} style={{ width: '100%', borderRadius: '10px' }} />
        );
    };

    // Dynamically render pricing information based on the category
    const renderPricing = () => {
        if (category === 'photographers') {
            return (
                <>
                    <p><strong>Price (Photoshoot):</strong> ₹ {Intl.NumberFormat('en-IN').format(data.price[0])}</p>
                    <p><strong>Price (Videoshoot + Photoshoot):</strong> ₹ {Intl.NumberFormat('en-IN').format(data.price[1])}</p>
                </>
            );
        } else if (category === 'resorts' || category === 'caterers') {
            return (
                <>
                    <p><strong>Price (Veg):</strong> ₹ {Intl.NumberFormat('en-IN').format(data.price[0])} /per plate</p>
                    <p><strong>Price (Non-Veg):</strong> ₹ {Intl.NumberFormat('en-IN').format(data.price[1])} /per plate</p>
                </>
            );
        }
        else {
            return (
                <p><strong>Price:</strong> ₹ {Intl.NumberFormat('en-IN').format(data.price[0])} /per day</p>
            );
        }
    };

    return (
        <div className="cardDetailedContainer">
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
            <div className="imageSlider">
                <Galleria
                    value={data.pics}
                    showItemNavigators
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    style={{ maxWidth: '640px', width: "100%" }}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                    circular
                    autoPlay
                    transitionInterval={2000}
                />
                <div className="detailsContainer1">
                    <h2>{data.name}</h2>
                    <p><strong>Description:</strong> {data.desc}</p>
                    <p><strong>Location:</strong> {data.location}</p>
                    <p><strong>Rating:</strong> {data.rating}</p>

                    {/* Show guests and rooms only for resorts */}
                    {category === 'resorts' && (
                        <>
                            <p><strong>Guests Capacity:</strong> {data.guests}</p>
                            <p><strong>Rooms Available:</strong> {data.rooms}</p>
                        </>
                    )}
                </div>
            </div>
            <div className="detailsContainer">
                <h3>Pricing Information</h3>
                {renderPricing()}
                <button className='viewContact' onClick={() => alert("Contact Info Displayed")}>View Contact</button>

                <h3>Check Availability</h3>
                <form className='cardForm' onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="date" name="functionDate" onChange={handleChange} required />

                    {category === 'resorts' && (
                        <>
                            <input type="number" name="guests" placeholder="Number of Guests" onChange={handleChange} required />
                            <input type="number" name="rooms" placeholder="Number of Rooms" onChange={handleChange} required />
                        </>
                    )}

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
