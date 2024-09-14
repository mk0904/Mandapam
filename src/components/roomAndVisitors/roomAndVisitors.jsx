import "./roomAndVisitors.css";
import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { FloatLabel } from 'primereact/floatlabel';

function RoomAndVisitors() {
  const [guests, setGuests] = useState(null);
  const [rooms, setRooms] = useState(null);

  const [value, setValue] = useState(20);

  return (
    <div className="roomsAndVisitors">
        <FloatLabel>
          <InputNumber
            id="guests"
            value={guests}
            min={0}
            onValueChange={(e) => setGuests(e.value)}
            showButtons
          />
          <label htmlFor="guests">Number of Guests</label>
        </FloatLabel>
        <FloatLabel>
          <InputNumber
            id="rooms"
            value={rooms}
            min={0}
            onValueChange={(e) => setRooms(e.value)}
            showButtons
          />
          <label htmlFor="rooms">Number of Rooms</label>
        </FloatLabel>
    </div>
  );
}

export default RoomAndVisitors;
