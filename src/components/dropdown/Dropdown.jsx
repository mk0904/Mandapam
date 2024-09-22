
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './Dropdown.css';

export default function DropdownCity({city, setCity}) {
    const cities = ['Goa', 'Jim Corbett', 'Udaipur', 'Jaipur', 'Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Lucknow', 'Hyderabad'];

    return (
        <div className="dropdowndiv">
            <Dropdown 
            value={city} 
            onChange={(e) => setCity(e.value)} 
            options={cities} optionLabel="name"
            placeholder="Select a City" 
            className="dropdown" 
            dropdownIcon/>
        </div>
    )
}