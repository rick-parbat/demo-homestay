import './RetreatExperience.css';

// Drawn from the Divine View brief and the earlier published Divine View site.
// These are intentions for opening, not promises of currently available services.
const perks = [
  { icon: 'mountain', title: 'Kanchenjunga & Teesta panoramas', text: 'A 360° mountain-and-river outlook is central to our vision, with rooms and balconies planned around the landscape. Views depend on the room and weather.' },
  { icon: 'sun', title: 'Clouds, mist & mountain rain', text: 'Watch the hills change mood as clouds drift past, sunlight breaks through and rain brings the landscape to life.' },
  { icon: 'waterfall', title: 'A waterfall, a short walk away', text: 'A nearby hill waterfall is approximately 2–3 minutes away on foot, by our local estimate. Ask about the path and conditions before setting out.' },
  { icon: 'route', title: 'Private & shared car options', text: 'Pickup arrangements from NJP, Siliguri or Bagdogra, plus cars for local sightseeing. Ask about shared options, availability and fares.' },
  { icon: 'leaf', title: 'Flowers & an organic kitchen garden', text: 'Colourful hill flowers and a small organic vegetable patch are part of the retreat we’re creating — a closer connection to what grows here.' },
  { icon: 'camera', title: 'A corner for mountain memories', text: 'A dedicated selfie corner is planned with Kanchenjunga and the Teesta landscape as the backdrop on clear days.' },
  { icon: 'room', title: 'Rooms & duplex cottages', text: 'Clean, comfortable rooms and duplex cottages are being prepared for relaxed mountain stays. Final layouts and facilities will be shared before arrival.' },
  { icon: 'meal', title: 'Bengali meals, cooked like home', text: 'Traditional Bengali home cooking is at the heart of the stay, with fresh garden ingredients planned for the kitchen as the garden develops.' },
  { icon: 'fire', title: 'Fire safety & emergency readiness', text: 'Before stays begin, fire extinguishers, clear exit guidance, first-aid supplies and a safe, supervised bonfire area will be confirmed as part of the guest-safety plan.' },
];

function ExperienceIcon({ name }) {
  const paths = {
    waterfall: <path d="M3 6h10v20m5-20h11M9 6v10m13-10v10M3 28c4-4 8 4 13 0s8 4 13 0M17 11v12"/>,
    camera: <><path d="M3 10h7l3-4h7l3 4h6v17H3Z"/><circle cx="16" cy="18" r="5"/></>,
    mountain: <path d="m2 24 9-16 7 10 4-6 8 12H2Zm6-10 3 3 3-3" />,
    sun: <><circle cx="16" cy="13" r="5"/><path d="M16 2v3m0 16v3M5 13H2m28 0h-3M6 3l3 3m14 14 3 3M26 3l-3 3M6 23l3-3M2 29h28"/></>,
    meal: <><path d="M8 15h21c0 13-21 13-21 0ZM4 4v24M1 4v8h6V4m8 6c-4-4 4-4 0-8m8 8c-4-4 4-4 0-8M11 28h15"/></>,
    room: <path d="M3 27V5h26v22M3 17h26M7 17v-6h8v6m2 0v-6h8v6M3 23h26M6 23v5m20-5v5"/>,
    leaf: <><path d="M7 24C-2 6 18 3 28 4c-1 13-6 24-21 20ZM5 29 23 10M12 21v-9m0 9h10"/></>,
    route: <><circle cx="7" cy="7" r="4"/><circle cx="25" cy="25" r="4"/><path d="M13 7h9a5 5 0 0 1 0 10H10a5 5 0 0 0 0 10h7"/></>,
    fire: <><path d="M16 29c-5 0-9-3-9-8 0-4 3-7 6-10 0 3 2 4 3 5 0-5 3-8 4-12 4 4 6 9 5 14-1 6-4 11-9 11Z"/><path d="M13 22c0-2 2-3 3-5 2 2 3 4 2 6-1 2-4 2-5-1Z"/></></>,
  };
  return <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function RetreatPerks() {
  return <section className="perks-section" id="perks" aria-labelledby="perks-heading">
    <div className="retreat-shell">
      <div className="experience-heading"><div><p className="eyebrow">WHY DIVINE VIEW</p><h2 id="perks-heading">The hills give you more.</h2></div><p>The views, comforts and little experiences that make Divine View our idea of a special mountain escape — coming together in Ramdhura, Burmaik (Daragaon).</p></div>
      <ul className="perks-grid">{perks.map(perk => <li key={perk.title}><ExperienceIcon name={perk.icon}/><div><h3>{perk.title}</h3><p>{perk.text}</p></div></li>)}</ul>
      <p className="experience-note">Pre-opening plans · Final facilities and services will be confirmed before stays begin.</p>
    </div>
  </section>;
}

const activities = [
  { number: '01', title: 'Village walks & guided treks', text: 'Explore local pine forests and hill villages at walking pace. Ask about guided trekking arrangements and a route suited to your group.', label: 'AROUND RAMDHURA' },
  { number: '02', title: 'Flowers, fresh air & a photo stop', text: 'Spend a slow afternoon around the planned flower garden and vegetable patch, then pause for a photograph at the mountain-facing selfie corner.', label: 'PLANNED AT THE RETREAT' },
  { number: '03', title: 'Bonfire & barbecue nights', text: 'Gather around the warmth of a fire on a cool hill evening. Bonfire and barbecue arrangements are chargeable, supervised and dependent on weather, local conditions and availability.', label: 'ON REQUEST · CHARGEABLE' },
];

export function RetreatActivities() {
  return <section className="retreat-shell activities-section" id="experiences" aria-labelledby="activities-heading">
    <div className="experience-heading"><div><p className="eyebrow">DAYS WITHOUT A RUSH</p><h2 id="activities-heading">Do a little.<br/>Enjoy a lot.</h2></div><p>A few ways to imagine your time here — from exploring the village to the simple pleasures we’re planning at the retreat.</p></div>
    <ol className="activities-list">{activities.map(activity => <li key={activity.number}><span className="activity-number" aria-hidden="true">{activity.number}</span><p className="eyebrow">{activity.label}</p><h3>{activity.title}</h3><p>{activity.text}</p></li>)}</ol>
  </section>;
}

const questions = [
  { question: 'Are bookings open? When can we stay?', answer: 'Bookings are now open. The property is still under development, and stays will begin only after completion. Contact us to discuss your plans; the opening date and availability for your stay will be confirmed directly.' },
  { question: 'Can I enquire for a couple, family or group?', answer: 'Yes. Share your preferred dates and the number of adults and children travelling. We’ll discuss the planned accommodation and confirm room capacity and suitability before any stay is agreed.' },
  { question: 'Will meals, bonfires and transport be included?', answer: 'Bengali home-style meals are part of our offering; ask which meals your stay includes. Bonfire and barbecue nights are chargeable. Private or shared pickups and sightseeing cars can be discussed separately, with fares and availability confirmed directly. Outdoor activities depend on weather and conditions.' },
  { question: 'What fire-safety arrangements will be available?', answer: 'Before stays begin, we will confirm the fire-safety setup, including extinguishers, clear exit guidance, first-aid supplies and a supervised bonfire area. Bonfires will only be arranged when weather and local conditions are suitable. Ask us about the confirmed arrangements for your dates.' },
  { question: 'Are the pictures of the finished property?', answer: 'The room image is an enhanced version of a supplied photograph. The balcony is a concept image with a digitally added swing chair, and the food image is inspiration for the experience. Destination photographs show the wider Himalayan and Kalimpong region, not guaranteed views from the property. Promotional lettering has been removed from the supplied imagery. Actual property photographs will be added as the retreat is completed.' },
];

export function RetreatFAQ() {
  return <section className="retreat-shell retreat-faq" id="questions" aria-labelledby="faq-heading">
    <div><p className="eyebrow">BEFORE YOU PLAN</p><h2 id="faq-heading">A few things<br/>you might wonder.</h2><a className="text-link" href="#contact">Enquire Now <span aria-hidden="true">↗</span></a></div>
    <div className="faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<span className="faq-indicator" aria-hidden="true"/></summary><p>{item.answer}</p></details>)}</div>
  </section>;
}
