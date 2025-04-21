import React from 'react';

// Functional component that receives a single tour and a remove function as props
const TourCard = ({ tour, onRemove }) => {
  // Destructure properties from the tour object
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      {/* Tour image */}
      <img src={image} alt={name} />

      {/* Tour name */}
      <h2>{name}</h2>

      {/* Tour price */}
      <h4>${price}</h4>

      {/* Tour description/info */}
      <p>{info}</p>

      {/* Button to remove this tour from the list */}
      <button onClick={() => onRemove(id)}>Not Interested</button>
    </div>
  );
};

// Export the TourCard component for use in Gallery.jsx
export default TourCard;
