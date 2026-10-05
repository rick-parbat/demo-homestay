import './NearbyPlaces.css';
import { responsiveImage } from '../retreatContent';

const destinationPhotos = [
  { image: 'teesta', title: 'Follow the Teesta', label: 'RIVER VALLEYS', alt: 'The Teesta winding between forested hills in Kalimpong', query: 'Teesta River Kalimpong' },
  { image: 'rishop', title: 'First light in Rishop', label: 'MOUNTAIN MORNINGS', alt: 'Kanchenjunga illuminated at sunrise, photographed from Rishop', query: 'Rishop Kalimpong' },
  { image: 'kalimpong', title: 'A day in Kalimpong', label: 'CULTURE & DISCOVERY', alt: 'A golden Buddha statue overlooking the town of Kalimpong', query: 'Kalimpong West Bengal' },
];

// Verified 2026-10-05 against GTA Tourism's Ramdhura destination guide:
// https://darjeelingkalimpongtourism.com/destination/india/west-bengal/destination-kalimpong/ramdhura/
// Sillery: https://kalimpong.gov.in/tourist-place/silleri-gaon-2/
// Pedong monastery: https://kalimpongtourism.org/around-location?RandNo5654KJH=&aLocId=36&aroundLocationName=Sangchen+Dorjee+Monastery
// No property-to-attraction distances or journey times are assumed.
const places = [
  { name: 'Delo Hill', category: 'VIEWS & OPEN SKIES', description: 'Take in the mountain panorama, wander through the hilltop park and make time for an unhurried afternoon.', query: 'Deolo Hill Kalimpong' },
  { name: 'Icchey Gaon', category: 'QUIET VILLAGE MOMENTS', description: 'A peaceful hill village near Ramdhura, made for slowing down and soaking up the surrounding scenery.', query: 'Icchey Gaon Kalimpong' },
  { name: 'Sillery Gaon', category: 'A SCENIC DAY OUT', description: 'Let a picturesque hill village be the reason to explore a little further, with mountain scenery along the way.', query: 'Sillery Gaon Kalimpong' },
  { name: 'Pedong', category: 'CULTURE & A CHANGE OF PACE', description: 'Plan a day excursion to Pedong and discover Sangchen Dorjee Monastery, a window into the region’s Buddhist heritage.', query: 'Sangchen Dorjee Monastery Pedong' },
];

// Additional sightseeing options supplied by the property owner. These are a
// trip-planning list, not a claim that all are close by or fit into one day.
const morePlaces = [
  { title: 'Viewpoints & local discoveries', names: ['Ramitey Viewpoint (Teesta River)', 'Himani Park Viewpoint', 'Jalsa Bungalow', 'Burmaik Viewpoint', 'Hanuman Tok', 'Panbu Viewpoint', 'Coffee Bari'] },
  { title: 'Hill villages & forest outings', names: ['Lava', 'Lolegaon', 'Rishop', 'Kolakham', 'Charkhole', 'Kaffer Gaon'] },
  { title: 'Waterfalls, gardens & places to pause', names: ['Changey Waterfall', 'Nokdara Lake', 'Dungra Glass Bridge', 'Kalimpong Science Centre', 'Kalimpong Pine View Nursery', 'Kalimpong local sightseeing'] },
];

export default function NearbyPlaces() {
  return (
    <section className="retreat-shell nearby-section" id="nearby" aria-labelledby="nearby-heading">
      <div className="nearby-intro">
        <div><p className="eyebrow">NEARBY PLACES & DAY TRIPS</p><h2 id="nearby-heading">A little further.<br/>A little more to discover.</h2></div>
        <p>Quiet villages, hilltop views and local heritage. Make Ramdhura your starting point for a few memorable days in the Kalimpong hills.</p>
      </div>
      <div className="destination-photo-grid">
        {destinationPhotos.map(photo => <a className={`destination-photo destination-photo--${photo.image}`} key={photo.image} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(photo.query)}`} target="_blank" rel="noreferrer" aria-label={`Explore ${photo.title} on Google Maps`}>
          <img {...responsiveImage(photo.image)} alt={photo.alt} width="1280" height="960" sizes="(max-width: 700px) 100vw, 33vw" loading="lazy" decoding="async"/>
          <div className="destination-photo-caption"><span className="eyebrow">{photo.label}</span><h3>{photo.title}</h3><span className="photo-arrow" aria-hidden="true">↗</span></div>
        </a>)}
      </div>
      <ul className="nearby-list">
        {places.map((place, index) => (
          <li key={place.name}>
            <span className="nearby-number" aria-hidden="true">0{index + 1}</span>
            <div><p className="eyebrow">{place.category}</p><h3>{place.name}</h3><p className="nearby-description">{place.description}</p><a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query)}`} target="_blank" rel="noreferrer" aria-label={`Explore ${place.name} on Google Maps (opens in a new tab)`}>Explore on map <span aria-hidden="true">↗</span></a></div>
          </li>
        ))}
      </ul>
      <div className="more-sightseeing" aria-labelledby="more-sightseeing-heading">
        <h3 id="more-sightseeing-heading">More places for your itinerary</h3>
        <p>Explore a little locally or set aside a longer outing. We can discuss a sightseeing car and help you choose a route around your interests.</p>
        {morePlaces.map(group => <div className="sightseeing-group" key={group.title}><h4>{group.title}</h4><ul>{group.names.map(name => <li key={name}><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Kalimpong')}`} target="_blank" rel="noreferrer" aria-label={`Find ${name} on Google Maps`}>{name}<span aria-hidden="true"> ↗</span></a></li>)}</ul></div>)}
        <div className="longer-excursion"><span className="eyebrow">FOR A LONGER EXCURSION</span><h4>Sikkim Silk Route</h4><p>Interested in exploring beyond the Kalimpong hills? Discuss the Sikkim Silk Route separately so the journey, access requirements and time needed can be planned for your dates.</p><a className="text-link" href="#contact">Ask about your itinerary <span aria-hidden="true">↗</span></a></div>
      </div>
      <div className="nearby-planning"><p>These places span the wider region and are not a single-day circuit. Routes, access and journey times depend on conditions; confirm your itinerary with us.</p><a className="text-link" href="#contact">Enquire Now <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
