import React, { useState } from "react";
import './Calendar.css';
import { Calendar } from 'primereact/calendar';

function EventDateSelector() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    const [eventStartDate, setEventStartDate] = useState(null);
    const [eventEndDate, setEventEndDate] = useState(null);

    // First possible date starts from today
    let startMinDate = new Date();
    startMinDate.setDate(date);
    startMinDate.setMonth(month);
    startMinDate.setFullYear(year);

    // Max start date allowed (1 year from today)
    let startMaxDate = new Date(startMinDate);
    startMaxDate.setFullYear(startMaxDate.getFullYear() + 1);

    // If the user selects an end date first, then max start date is the event end date
    let customStartMaxDate = eventEndDate ? new Date(eventEndDate) : startMaxDate;

    // If the user selects a start date first, the min end date is the event start date
    let endMinDate = eventStartDate ? new Date(eventStartDate) : startMinDate;

    // Max end date allowed (1 year from the start date)
    let endMaxDate = new Date(startMinDate);
    endMaxDate.setFullYear(endMinDate.getFullYear() + 1);

    return (
        <div className="calendar">
                <Calendar 
                    value={eventStartDate} 
                    placeholder="Event Start Date" 
                    onChange={(e) => {
                        setEventStartDate(e.value);
                    }} 
                    dateFormat="dd M yy"
                    minDate={startMinDate} 
                    maxDate={customStartMaxDate}  // Limit the start date to the selected end date or 1 year from today
                    readOnlyInput 
                    showIcon 
                />
            <Calendar 
                value={eventEndDate} 
                placeholder="Event End Date" 
                onChange={(e) => setEventEndDate(e.value)} 
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
