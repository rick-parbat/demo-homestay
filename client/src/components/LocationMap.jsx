import { useSiteConfig } from '../context/SiteConfigContext';
import './LocationMap.css';

export default function LocationMap() {
  const { config } = useSiteConfig();
  if (!config) return null;

  return (
    <section className="location section" id="location">
      <div className="container">
        <h2 className="location__heading">Getting here</h2>
        <div className="location__grid">
          <div className="location__map-wrap">
            <iframe
              className="location__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13620.862897!2d77.22!3d31.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e7b%3A0x1b8d2c9b8f08440d!2sMashobra%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deodar Nest location on map"
            />
          </div>
          <div className="location__info">
            <p className="location__address">{config.address}</p>
            <hr className="brass-rule" />
            <ul className="location__distances">
              {config.distances?.map((d, i) => (
                <li key={i} className="location__distance">
                  <span className="location__place">{d.place}</span>
                  <span className="location__km">{d.distance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
