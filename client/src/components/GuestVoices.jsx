import { useApi } from '../hooks/useApi';
import './GuestVoices.css';

export default function GuestVoices() {
  const { data: reviews, loading } = useApi('/api/reviews?featured=true');

  if (loading || !reviews?.length) return null;

  return (
    <section className="voices section section--mist" id="reviews">
      <div className="container">
        <h2 className="voices__heading">What guests say</h2>
        <div className="voices__list">
          {reviews.map((review) => (
            <blockquote key={review._id} className="voice">
              <p className="voice__quote">"{review.quote}"</p>
              <footer className="voice__footer">
                <cite className="voice__name">{review.guestName}</cite>
                <span className="voice__location">{review.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
