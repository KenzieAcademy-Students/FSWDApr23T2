import React from "react";

const TouristDestinations = ({ name, city, state }) => {
  return (
    <div className="destination-card">
      <span className="destination-info">{name}</span>
      <span className="destination-info">
        {city}, {state}
      </span>
    </div>
  );
};

export default TouristDestinations;
