import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import PropertyCard from '../components/PropertyCard';
import propertiesData from '../data/properties.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const PropertyPage = () => {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage 
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to localStorage when the list changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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

  const addToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <>

      <Header />
      <section  className="py-5 bg-light m-md-5">
        <div className="container">
      <SearchForm onSearch={handleSearch} />
      {/* <div className="row p-2">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div> */}
      <div className="d-flex flex-wrap mb-2 p-3 rounded bg-secondary">
        <div className="col-12 col-md-8"
          onDrop={(e) => {
            e.preventDefault();
            const propertyId = e.dataTransfer.getData('propertyId');
            const property = favorites.find((fav) => fav.id === propertyId);
            if (property) {
              removeFromFavorites(propertyId);
            }
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="row p-2">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onFavorite={(property) => {
                if (favorites.some((fav) => fav.id === property.id)) {
                  removeFromFavorites(property.id);
                } else {
                  addToFavorites(property);
                }
              }}
                isFavorited={favorites.some((fav) => fav.id === property.id)} />
            ))}
          </div>
        </div>
        <div className="col-12 col-md-4 bg-light rounded p-2"
          onDrop={(e) => {
            e.preventDefault();
            const propertyId = e.dataTransfer.getData('propertyId');
            const property = propertiesData.properties.find((p) => p.id === propertyId);
            if (property && !favorites.some((fav) => fav.id === property.id)) {
              addToFavorites(property);
            }
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>Favorites</h3>
          <div className="list-group">
            {favorites.map((property) => (
              <div key={property.id} className="list-group-item"
                draggable
                onDragStart={(e) => e.dataTransfer.setData('propertyId', property.id)}
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://2.bp.blogspot.com/-ZHzJmPA1byA/VZp5e9CiF2I/AAAAAAAAwmo/73_C5bAUyyo/s1600/new-flat-roof-home.jpg"
                    alt={property.type}
                    className="img-thumbnail me-3"
                    style={{ width: "100px", height: "auto" }}
                  />
                  <div>
                    <h5>{property.type}</h5>
                    <p>
                      <strong>Price:</strong> £{property.price} <br />
                      <strong>Location:</strong> {property.location}
                    </p>
                    <Link to={property.url} className="btn btn-sm btn-primary mx-1">
                      View Details
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromFavorites(property.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {favorites.length > 0 && (
            <button className="btn btn-warning mt-2" onClick={clearFavorites}>
              Clear Favorites
            </button>
          )}
        </div>
      </div>
      </div>
      </section>
      <Footer />

    </>

  );
};

export default PropertyPage;
