import { useSiteConfig } from '../context/SiteConfigContext';
import './HighlightsSection.css';

export default function HighlightsSection() {
  const { config } = useSiteConfig();
  if (!config?.highlights?.length) return null;

  return (
    <section className="highlights section" id="highlights">
      <div className="container">
        <h2 className="highlights__heading">What it feels like here</h2>
      </div>
      {config.highlights.map((item, i) => (
        <div
          key={i}
          className={`highlight ${i % 2 === 1 ? 'highlight--reverse' : ''}`}
        >
          <div className="highlight__img-wrap">
            <img src={item.image} alt={item.heading} className="highlight__img" />
          </div>
          <div className="highlight__text">
            <h3 className="highlight__title">{item.heading}</h3>
            <p className="highlight__desc prose">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
