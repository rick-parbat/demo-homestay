import { useSiteConfig } from '../context/SiteConfigContext';
import './FinalCTA.css';

export default function FinalCTA() {
  const { config } = useSiteConfig();

  const waLink = config?.contactWhatsApp
    ? `https://wa.me/${config.contactWhatsApp.replace(/[^0-9]/g, '')}`
    : '#';

  return (
    <section className="final-cta section--dusk" id="final-cta">
      <div className="container final-cta__inner">
        <h2 className="final-cta__headline">
          Come stay with us in the hills
        </h2>
        <div className="final-cta__actions">
          <a href="#book" className="btn btn--primary final-cta__btn">
            Book now
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--light final-cta__btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.521 5.857L0 24l6.327-1.476A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.93 0-3.756-.52-5.33-1.428l-.382-.227-3.965.925.986-3.88-.249-.394A9.786 9.786 0 0 1 2.182 12c0-5.418 4.4-9.818 9.818-9.818S21.818 6.582 21.818 12s-4.4 9.818-9.818 9.818z"/>
            </svg>
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
