import { useRef, useState } from 'react';
import { imagery, responsiveImage } from '../retreatContent';
import NearbyPlaces from '../components/NearbyPlaces';
import { RetreatPerks, RetreatActivities, RetreatFAQ } from '../components/RetreatExperience';
import './Home.css';
import './Photography.css';

const enquiry = 'https://wa.me/919593487208?text=' + encodeURIComponent('Hello Divine View Retreat! I’d like to book a stay in Ramdhura, Burmaik. Please share availability, room options and rates for my preferred dates.\n\nCheck-in: \nCheck-out: \nAdults: \nChildren: ');
const navigation = [['Home', 'home'], ['The Retreat', 'retreat'], ['Rooms', 'rooms'], ['Ramdhura', 'ramdhura'], ['Location', 'location'], ['Contact', 'contact']];
function RetreatLogo() {
  return <img className="retreat-logo" src="/retreat/logo.webp" alt="Divine View Retreat" width="512" height="512" />;
}
function Visual({ name }) {
  const asset = imagery[name];
  return <figure className={`visual visual--${name}`}>
    {<img src={asset.src} srcSet={asset.srcSet || undefined} sizes={name === 'mountain' ? '100vw' : '(max-width: 700px) 100vw, 50vw'} alt={asset.alt} width="1920" height="1080" loading="lazy" decoding="async" />}
    <figcaption>{asset.caption}</figcaption>
  </figure>;
}
function Enquire({ children = 'Enquire Now' }) {
  return <a className="retreat-button" href={enquiry} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  function closeWithEscape(event) {
    if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
  }
  return <div className="retreat-site" id="home">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="retreat-header" onKeyDown={closeWithEscape}>
      <div className="retreat-shell header-inner">
        <a className="brand" href="#home" aria-label="Divine View Retreat home"><RetreatLogo/><span>Divine View<span className="brand-sub">RETREAT · RAMDHURA</span></span></a>
        <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="header-actions"><Enquire/><button ref={menuButton} className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button></div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav" hidden={!menuOpen}>{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
    </header>
    <main id="main">
      <section className="retreat-hero"><img className="hero-photograph" {...responsiveImage("hero-kanchenjunga")} sizes="100vw" width="2400" height="1800" alt="Golden sunrise light across Kanchenjunga — destination photography" fetchPriority="high"/><div className="hero-shade" aria-hidden="true"/><div className="retreat-shell hero-inner"><p className="eyebrow">RAMDHURA · KALIMPONG</p><h1>Find your quiet<br/>in the hills.</h1><p className="hero-bengali" lang="bn">“যেখানে প্রকৃতির ক্যানভাসে ঈশ্বর নিজ হাতে ছবি এঁকেছেন...”</p><p className="hero-description">An offbeat Himalayan homestay taking shape in Ramdhura, Burmaik (Daragaon) — with Kanchenjunga on the horizon, the Teesta below and time to slow down.</p><div className="hero-actions"><Enquire/><a className="text-link" href="#retreat">Explore the Retreat <span aria-hidden="true">↓</span></a></div><div className="hero-bottom"><span>BOOKINGS OPEN · STAYS AFTER COMPLETION</span><span>KANCHENJUNGA · DESTINATION PHOTOGRAPHY</span></div></div></section>
      <section className="retreat-shell introduction" id="retreat"><div><p className="eyebrow">A LITTLE CLOSER TO NATURE</p><h2>A slower kind of<br/>mountain stay.</h2></div><div><p>Divine View Retreat is being created as a peaceful base for travellers who want quieter mornings, comforting food and time away from crowded hill-station routines.</p><p>Located in Ramdhura near Kalimpong, the retreat is designed around the landscape rather than away from it.</p></div></section>
      <RetreatPerks />
      <section className="mountain-section" aria-labelledby="mountain-heading"><div className="retreat-shell visual-heading"><h2 id="mountain-heading">Mornings worth waking up for.</h2><p>Mist, clouds and layered Himalayan hills.</p></div><Visual name="mountain"/></section>
      <section className="retreat-shell rooms-section" id="rooms"><div className="section-heading"><div><p className="eyebrow">THE RETREAT, IN THE MAKING</p><h2>Room to slow down.</h2></div><span className="small-note">Thoughtfully planned. Quietly taking shape.</span></div><div className="room-pair"><article><Visual name="room"/><div className="editorial-copy"><span className="section-number">01</span><div><h3>Rest well.</h3><p>Comfortable rooms and duplex cottages, thoughtfully planned for a clean, restful place to return to after a day in the hills.</p></div></div></article><article><Visual name="balcony"/><div className="editorial-copy"><span className="section-number">02</span><div><h3>Step outside.</h3><p>Balconies and open spaces are planned around the surrounding hills, giving guests room to slow down and simply take in the view.</p></div></div></article></div><p className="concept-note">Concept imagery shown while the property is under development. Final rooms and finishes may vary.</p></section>
      <section className="food-section"><div className="retreat-shell split-section"><Visual name="food"/><div className="split-copy"><p className="eyebrow">WARM MEALS. SIMPLE PLEASURES.</p><h2>Cooked like home.</h2><p>The familiar comfort of Bengali home cooking, served with care after a cool morning or a day in the hills. Our kitchen plans include fresh ingredients from the retreat’s own vegetable garden as it develops.</p><span className="small-note">Bengali meals, made with care.</span></div></div></section>
      <section className="retreat-shell split-section destination-section" id="ramdhura"><div className="split-copy"><p className="eyebrow">DISCOVER RAMDHURA</p><h2>Away from<br/>the usual.</h2><p>A quieter side of the Kalimpong hills — forest roads, changing mountain light, cool air and a slower pace than the busier tourist centres.</p><div className="destination-details"><span>Forest & village walks</span><span>Changing mountain light</span><span>A little time to yourself</span></div></div><Visual name="destination"/></section>
      <RetreatActivities />
      <NearbyPlaces />
      <section className="retreat-shell location-section" id="location"><div><p className="eyebrow">FIND YOUR WAY HERE</p><h2>Ramdhura,<br/>Kalimpong.</h2><p>Ramdhura, Burmaik (Daragaon),<br/>Kalimpong, West Bengal — 734315</p><p className="location-planning">Our local travel estimate is around 3.5 hours from NJP or Siliguri, depending on traffic, weather and road conditions. Contact us for current route advice.</p><p className="location-planning">Private and shared pickup options from NJP, Siliguri and Bagdogra, plus local sightseeing car arrangements. Confirm availability and fares when you enquire.</p><a className="text-link" href="https://www.google.com/maps/dir/?api=1&destination=27.1336667%2C88.5661389" target="_blank" rel="noreferrer">Get directions to Divine View Retreat ↗</a></div><div className="map-wrap"><iframe title="Divine View Retreat — location shared by our hosts" src="https://www.google.com/maps?q=27.1336667,88.5661389&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><p className="small-note">Our location · The Divine View Retreat listing is being added to Google Maps. Please use this pin for directions.</p></div></section>
      <RetreatFAQ />
      <section className="opening-section" id="contact"><div className="retreat-shell opening-inner"><RetreatLogo/><p className="eyebrow">BOOKINGS NOW OPEN</p><h2>Be among the first to stay.</h2><p>Bookings are now open. The retreat is still taking shape; stays begin after completion. Get in touch for availability, room options and rates for your preferred dates.</p><Enquire>Enquire About Your Stay</Enquire><a className="opening-call" href="tel:+917001268181">Or call +91 70012 68181</a></div></section>
    </main>
    <footer className="retreat-footer"><div className="retreat-shell"><div className="footer-grid"><div><a className="footer-brand" href="#home" aria-label="Divine View Retreat home"><RetreatLogo/></a><p>A quieter kind of mountain stay.<br/>Ramdhura, Kalimpong, West Bengal.</p></div><div><p className="eyebrow">GET IN TOUCH</p><a href="tel:+917001268181">+91 70012 68181</a><a href="mailto:divineview15@gmail.com">divineview15@gmail.com</a><a href={enquiry} target="_blank" rel="noreferrer" aria-label="Enquire with Divine View Retreat on WhatsApp">WhatsApp: +91 95934 87208 ↗</a></div><nav aria-label="Footer navigation"><p className="eyebrow">EXPLORE</p><a href="#retreat">The Retreat</a><a href="#rooms">Rooms</a><a href="#ramdhura">Ramdhura</a><a href="#perks">Why Divine View</a><a href="#experiences">Experiences</a><a href="#questions">Common questions</a></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Divine View Retreat</span><span>Taking shape in the hills.</span></div></div></footer>
  </div>;
}
