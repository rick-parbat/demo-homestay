import { useSiteConfig } from '../context/SiteConfigContext';
import './HostWelcome.css';

export default function HostWelcome() {
  const { config } = useSiteConfig();
  if (!config) return null;

  return (
    <section className="host section" id="host">
      <div className="container host__grid">
        <div className="host__photo-wrap">
          <img
            src={config.hostPhoto}
            alt={`${config.hostName}, your host at Deodar Nest`}
            className="host__photo"
          />
        </div>
        <div className="host__text">
          <p className="host__quote prose">
            "{config.hostWelcome}"
          </p>
          <p className="host__sign-off">— {config.hostName}</p>
        </div>
      </div>
    </section>
  );
}
