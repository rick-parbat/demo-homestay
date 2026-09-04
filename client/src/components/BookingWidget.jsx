import { useState } from 'react';
import { useApi } from '../hooks/useApi';
import './BookingWidget.css';

export default function BookingWidget() {
  const { data: rooms } = useApi('/api/rooms');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [results, setResults] = useState(null);
  const [checking, setChecking] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return;
    setChecking(true);
    try {
      const res = await fetch('/api/bookings/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checkIn, checkOut, guests }),
      });
      const data = await res.json();
      setResults(data);
    } catch {
      setResults([]);
    }
    setChecking(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form className="booking-widget" onSubmit={handleCheck} id="book">
      <div className="booking-widget__field">
        <label className="booking-widget__label">Check-in</label>
        <input
          type="date"
          className="booking-widget__input"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          min={today}
          required
        />
      </div>
      <div className="booking-widget__divider" />
      <div className="booking-widget__field">
        <label className="booking-widget__label">Check-out</label>
        <input
          type="date"
          className="booking-widget__input"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn || today}
          required
        />
      </div>
      <div className="booking-widget__divider" />
      <div className="booking-widget__field">
        <label className="booking-widget__label">Guests</label>
        <select
          className="booking-widget__input"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn--primary booking-widget__btn" disabled={checking}>
        {checking ? 'Checking...' : 'Check availability'}
      </button>
      {results !== null && (
        <div className="booking-widget__results">
          {results.length > 0 ? (
            <p className="booking-widget__available">
              {results.length} {results.length === 1 ? 'room' : 'rooms'} available
            </p>
          ) : (
            <p className="booking-widget__unavailable">
              No rooms available for these dates
            </p>
          )}
        </div>
      )}
    </form>
  );
}
