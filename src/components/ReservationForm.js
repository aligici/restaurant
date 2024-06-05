import React, { useState, useContext } from 'react';
import ReservationContext from '../context/ReservationContext';

const ReservationForm = () => {
  const { addReservation } = useContext(ReservationContext);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [requests, setRequests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservation({ name, date, time, guests, requests });
    setName('');
    setDate('');
    setTime('');
    setGuests(1);
    setRequests('');
    alert('Reservation made successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <div>
        <label>Number of Guests:</label>
        <input type="number" value={guests} min="1" onChange={(e) => setGuests(e.target.value)} required />
      </div>
      <div>
        <label>Special Requests:</label>
        <textarea value={requests} onChange={(e) => setRequests(e.target.value)} />
      </div>
      <button type="submit">Book Table</button>
    </form>
  );
};

export default ReservationForm;
