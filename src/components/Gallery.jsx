import React from 'react';
import TourCard from './TourCard';

// Gallery component receives the list of tours and a remove function as props
const Gallery = ({ tours, onRemove }) => {
  return (
    <section className="gallery">
      {/* Map through the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        // Each TourCard gets a unique key, the tour object, and the onRemove handler
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

// Export the Gallery component so it can be used in App.jsx
export default Gallery;
