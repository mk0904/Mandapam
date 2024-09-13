
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './Dropdown.css';

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = ['Goa', 'Jim Corbett', 'Udaipur', 'Jaipur', 'Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Lucknow', 'Hyderabad'
    ];

    return (
        <div className="dropdowndiv">
            <Dropdown 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.value)} 
            options={cities} optionLabel="name" 
            placeholder="Select a City" 
            className="dropdown" />
        </div>
    )
}