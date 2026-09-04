import { useSiteConfig } from '../context/SiteConfigContext';
import BookingWidget from './BookingWidget';
import './Hero.css';

export default function Hero() {
  const { config } = useSiteConfig();

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img
          src="/images/hero.jpg"
          alt="Deodar Nest homestay among pine forests with mountain views"
          className="hero__img"
        />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content container">
        <h1 className="hero__headline">
          {config?.heroHeadline || 'Where the pines meet the clouds'}
        </h1>
        <p className="hero__subhead">
          {config?.heroSubhead || 'A quiet corner in the Shimla hills, run by a family that loves these mountains as much as you will.'}
        </p>
      </div>
      <div className="hero__widget container">
        <BookingWidget />
      </div>
    </section>
  );
}
