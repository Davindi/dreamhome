import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={property.picture} className="card-img-top" alt="Property" />
        <div className="card-body">
          <h5 className="card-title">{property.type}</h5>
          <p className="card-text">{property.description.substring(0, 100)}...</p>
          <p className="card-text"><strong>Price:</strong> £{property.price}</p>
          <p className="card-text"><strong>Location:</strong> {property.location}</p>
          <a href={property.url} className="btn btn-primary">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
