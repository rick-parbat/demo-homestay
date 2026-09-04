import { Link } from 'react-router-dom';
import './RoomCard.css';

export default function RoomCard({ room }) {
  return (
    <article className="room-card">
      <div className="room-card__img-wrap">
        <img
          src={room.images?.[0] || '/images/room-slate.jpg'}
          alt={room.name}
          className="room-card__img"
        />
      </div>
      <div className="room-card__body">
        <h3 className="room-card__name">{room.name}</h3>
        <p className="room-card__tagline">{room.tagline}</p>
        <p className="room-card__price">From ₹{room.pricePerNight?.toLocaleString('en-IN')}</p>
        <Link to={`/room/${room._id}`} className="btn btn--outline room-card__btn">
          View details
        </Link>
      </div>
    </article>
  );
}
