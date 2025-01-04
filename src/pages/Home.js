import React, { useState } from 'react';
import SearchForm from './SearchForm';
import PropertyCard from './PropertyCard';
import propertiesData from '../data/properties.json';

const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

  const handleSearch = (criteria) => {
    const filtered = propertiesData.properties.filter((property) => {
      return (
        (!criteria.type || property.type === criteria.type) &&
        (!criteria.minPrice || property.price >= criteria.minPrice) &&
        (!criteria.maxPrice || property.price <= criteria.maxPrice) &&
        (!criteria.minBedrooms || property.bedrooms >= criteria.minBedrooms) &&
        (!criteria.maxBedrooms || property.bedrooms <= criteria.maxBedrooms) &&
        (!criteria.dateAdded || new Date(property.added.year, new Date().getMonth(property.added.month), property.added.day) >= new Date(criteria.dateAdded)) &&
        (!criteria.postcode || property.location.includes(criteria.postcode))
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="container">
      <SearchForm onSearch={handleSearch} />
      <div className="row">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
