import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useApi, postApi } from '../hooks/useApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';
import './RoomDetail.css';

export default function RoomDetail() {
  const { id } = useParams();
  const { data: room, loading, error } = useApi(`/api/rooms/${id}`);

  const [form, setForm] = useState({
    guestName: '', email: '', phone: '', checkIn: '', checkOut: '', guests: 2,
  });
  const [booking, setBooking] = useState(null);
  const [bookError, setBookError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setBookError('');
    try {
      const result = await postApi('/api/bookings', { ...form, room: id });
      setBooking(result);
    } catch (err) {
      setBookError(err.message);
    }
    setSubmitting(false);
  };

  if (loading) return <div className="room-detail__loading">Loading...</div>;
  if (error || !room) return <div className="room-detail__loading">Room not found</div>;

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Navbar />
      <main className="room-detail">
        <div className="room-detail__hero">
          <img
            src={room.images?.[0] || '/images/room-slate.jpg'}
            alt={room.name}
            className="room-detail__hero-img"
          />
          <div className="room-detail__hero-overlay" />
          <div className="room-detail__hero-content container">
            <Link to="/" className="room-detail__back">&larr; Back to all rooms</Link>
            <h1 className="room-detail__name">{room.name}</h1>
            <p className="room-detail__tagline">{room.tagline}</p>
          </div>
        </div>

        <div className="container room-detail__content">
          <div className="room-detail__info">
            <div className="room-detail__desc prose">
              <p>{room.description}</p>
            </div>

            <hr className="brass-rule" />

            <h3>What's included</h3>
            <ul className="room-detail__amenities">
              {room.amenities?.map((a, i) => (
                <li key={i} className="room-detail__amenity">{a}</li>
              ))}
            </ul>

            <div className="room-detail__meta">
              <span>Up to {room.maxGuests} guests</span>
              <span className="room-detail__price">
                From ₹{room.pricePerNight?.toLocaleString('en-IN')} per night
              </span>
            </div>
          </div>

          <aside className="room-detail__booking">
            {booking ? (
              <div className="room-detail__success">
                <h3>Booking confirmed</h3>
                <p>Thank you, {booking.guestName}! Your booking for {room.name} has been received.</p>
                <p className="room-detail__total">
                  Total: ₹{booking.totalPrice?.toLocaleString('en-IN')}
                </p>
                <p className="meta">We'll be in touch shortly to confirm your dates.</p>
              </div>
            ) : (
              <form className="room-detail__form" onSubmit={handleSubmit}>
                <h3>Reserve this room</h3>
                {bookError && <p className="room-detail__error">{bookError}</p>}
                <div className="room-detail__field">
                  <label>Full name</label>
                  <input type="text" name="guestName" value={form.guestName} onChange={handleChange} required />
                </div>
                <div className="room-detail__field">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="room-detail__field">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="room-detail__field-row">
                  <div className="room-detail__field">
                    <label>Check-in</label>
                    <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} min={today} required />
                  </div>
                  <div className="room-detail__field">
                    <label>Check-out</label>
                    <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} min={form.checkIn || today} required />
                  </div>
                </div>
                <div className="room-detail__field">
                  <label>Guests</label>
                  <select name="guests" value={form.guests} onChange={handleChange}>
                    {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%' }} disabled={submitting}>
                  {submitting ? 'Booking...' : 'Confirm booking'}
                </button>
              </form>
            )}
          </aside>
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
