import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAdded: '',
    postcode: '',
  });

  const handleChange = (e) => {
    setCriteria({ ...criteria, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form className="my-4 p-5 bg-dark rounded" onSubmit={handleSubmit}>
      <div className="row">
        {/* Property Type */}
        <div className="col-md-2 py-2">
          <select
            name="type"
            className="form-select"
            value={criteria.type}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        {/* Price */}
        <div className="col-md-2 py-2">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            className="form-control"
            value={criteria.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2 py-2">
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            className="form-control"
            value={criteria.maxPrice}
            onChange={handleChange}
          />
        </div>
        {/* Bedrooms */}
        <div className="col-md-2 py-2">
          <input
            type="number"
            name="minBedrooms"
            placeholder="Min Bedrooms"
            className="form-control"
            value={criteria.minBedrooms}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2 py-2">
          <input
            type="number"
            name="maxBedrooms"
            placeholder="Max Bedrooms"
            className="form-control"
            value={criteria.maxBedrooms}
            onChange={handleChange}
          />
        </div>
        {/* Date Added */}
        <div className="col-md-2 pt-2">
          <input
            type="date"
            name="dateAdded"
            className="form-control"
            value={criteria.dateAdded}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* Postcode */}
      <div className="row mt-3 ">
        <div className="col-md-8 pb-2">
          <input
            type="text"
            name="postcode"
            placeholder="Postcode (e.g., BR1)"
            className="form-control"
            value={criteria.postcode}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary w-100">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
