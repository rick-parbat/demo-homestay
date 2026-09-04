import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Stay', href: '#stay' },
  { label: 'Experiences', href: '#highlights' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Offers', href: '#offers' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--solid' : ''}`} id="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          Deodar Nest
        </Link>

        {/* Desktop nav */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="navbar__link">{item.label}</a>
            </li>
          ))}
        </ul>

        <a href="#book" className="btn btn--primary navbar__cta">Book now</a>

        {/* Mobile controls */}
        <div className="navbar__mobile">
          <a href="tel:+919876543210" className="navbar__mobile-icon" aria-label="Call us">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`navbar__hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#book" className="btn btn--primary" onClick={() => setMenuOpen(false)} style={{ width: '100%' }}>
          Book now
        </a>
      </div>
    </nav>
  );
}
