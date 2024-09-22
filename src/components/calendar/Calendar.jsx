import React, { useState } from "react";
import './Calendar.css';
import { Calendar } from 'primereact/calendar';

function EventDateSelector({startDate, setStartDate, endDate, setEndDate}) {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    // First possible date starts from today
    let startMinDate = new Date();
    startMinDate.setDate(date);
    startMinDate.setMonth(month);
    startMinDate.setFullYear(year);

    // Max start date allowed (1 year from today)
    let startMaxDate = new Date(startMinDate);
    startMaxDate.setFullYear(startMaxDate.getFullYear() + 1);

    // If the user selects an end date first, then max start date is the event end date
    let customStartMaxDate = endDate ? new Date(endDate) : startMaxDate;

    // If the user selects a start date first, the min end date is the event start date
    let endMinDate = startDate ? new Date(startDate) : startMinDate;

    // Max end date allowed (1 year from the start date)
    let endMaxDate = new Date(startMinDate);
    endMaxDate.setFullYear(endMinDate.getFullYear() + 1);

    return (
        <div className="calendar">
                <Calendar 
                    value={startDate} 
                    placeholder="Event Start Date" 
                    onChange={(e) => {
                        setStartDate(e.value);
                    }} 
                    dateFormat="dd M yy"
                    minDate={startMinDate} 
                    maxDate={customStartMaxDate}  // Limit the start date to the selected end date or 1 year from today
                    readOnlyInput 
                    showIcon 
                />
            <Calendar 
                value={endDate} 
                placeholder="Event End Date" 
                onChange={(e) => setEndDate(e.value)} 
                dateFormat="dd M yy"
                minDate={endMinDate}  // End date cannot be earlier than the start date
                maxDate={endMaxDate}   // Max end date is 1 year from today
                readOnlyInput 
                showIcon 
            />
        </div>
    );
}

export default EventDateSelector;
