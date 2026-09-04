import { useApi } from '../hooks/useApi';
import './Offers.css';

export default function Offers() {
  const { data: offers, loading } = useApi('/api/offers');

  if (loading || !offers?.length) return null;

  return (
    <section className="offers section" id="offers">
      <div className="container">
        <h2 className="offers__heading">Current offers</h2>
        <div className="offers__grid">
          {offers.map((offer) => (
            <article key={offer._id} className="offer-card">
              {offer.badgeText && (
                <span className="offer-card__badge">{offer.badgeText}</span>
              )}
              <h3 className="offer-card__title">{offer.title}</h3>
              <p className="offer-card__desc">{offer.description}</p>
              <a href="#book" className="btn btn--copper offer-card__btn">
                Book this offer
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
