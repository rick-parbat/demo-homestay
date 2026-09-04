import { Link } from 'react-router-dom';
import { useSiteConfig } from '../context/SiteConfigContext';
import './Footer.css';

export default function Footer() {
  const { config } = useSiteConfig();

  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Deodar Nest</Link>
          <p className="footer__tagline">A homestay in the Shimla hills</p>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Navigate</h4>
          <ul className="footer__list">
            <li><a href="#stay">Stay</a></li>
            <li><a href="#highlights">Experiences</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#offers">Offers</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__heading">Get in touch</h4>
          <ul className="footer__list">
            {config?.contactPhone && (
              <li><a href={`tel:${config.contactPhone}`}>{config.contactPhone}</a></li>
            )}
            {config?.contactEmail && (
              <li><a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a></li>
            )}
            {config?.contactWhatsApp && (
              <li>
                <a href={`https://wa.me/${config.contactWhatsApp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="footer__social">
          <h4 className="footer__heading">Follow</h4>
          <ul className="footer__list">
            {config?.socialLinks?.instagram && (
              <li><a href={config.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            )}
            {config?.socialLinks?.facebook && (
              <li><a href={config.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            )}
          </ul>
        </div>
      </div>
      <div className="footer__bottom container">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Deodar Nest. All rights reserved.</p>
        <div className="footer__policies">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#cancellation">Cancellation policy</a>
        </div>
      </div>
    </footer>
  );
}
