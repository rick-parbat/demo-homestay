import { useApi } from '../hooks/useApi';
import RoomCard from './RoomCard';
import './RoomsSection.css';

export default function RoomsSection() {
  const { data: rooms, loading } = useApi('/api/rooms');

  if (loading || !rooms) return null;

  return (
    <section className="rooms section" id="stay">
      <div className="container">
        <h2 className="rooms__heading">Where you'll stay</h2>
        <div className="rooms__grid">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
