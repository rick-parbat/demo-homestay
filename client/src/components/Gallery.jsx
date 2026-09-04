import { useApi } from '../hooks/useApi';
import './Gallery.css';

export default function Gallery() {
  const { data: images, loading } = useApi('/api/gallery');

  if (loading || !images?.length) return null;

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <h2 className="gallery__heading">A look around</h2>
        <div className="gallery__masonry">
          {images.map((img) => (
            <div
              key={img._id}
              className={`gallery__item gallery__item--${img.aspectRatio}`}
            >
              <img src={img.url} alt={img.alt} className="gallery__img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
