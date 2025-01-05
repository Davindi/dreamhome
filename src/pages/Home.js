import React, { useState,useEffect} from 'react';
import SearchForm from '../components/SearchForm';
import PropertyCard from '../components/PropertyCard';
import propertiesData from '../data/properties.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import prop1Img from '../assests/img/prop1.jpg';
import prop2Img from '../assests/img/prop2.jpg';
import prop3Img from '../assests/img/prop3.jpg';
import prop4Img from '../assests/img/prop4.jpg';
import prop5Img from '../assests/img/prop5.jpg';
import prop6Img from '../assests/img/prop6.jpg';
import prop7Img from '../assests/img/prop 7.jpg';
import prop8Img from '../assests/img/prop8.jpg';
import prop9Img from '../assests/img/prop9.jpg';
import prop10Img from '../assests/img/prop10.jpg';

const propertyImages = {
  prop1: prop1Img,
  prop2: prop2Img,
  prop3: prop3Img,
  prop4: prop4Img,
  prop5: prop5Img,
  prop6: prop6Img,
  prop7: prop7Img,
  prop8: prop8Img,
  prop9: prop9Img,
  prop10: prop10Img,
  
}
const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);
  const [featuredProperties, setFeaturedProperties] = useState([]);

  
  useEffect(() => {
    setFeaturedProperties(filteredProperties.slice(0, 3));
    
  }, []);

  return (

      <>
      <Header />
      <section className="hero-section bg-dark text-white text-center py-5 m-5 rounded ">
        <div className="container ">
          <h1 className='my-5'>Welcome to Home Dreams</h1>
          <p>Discover your dream property with ease.</p>
          <Link to="/properties" className="btn btn-light btn-lg mt-3">Explore Properties</Link>
        </div>
      </section>

      <section className="search-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Search Properties</h2>
          <p className="text-center">Find the perfect property based on your preferences.</p>
          <div className="text-center mt-4">
            <Link to="/properties" className="btn btn-primary btn-lg">
              Start Searching
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-properties-section py-5">
        <div className="container">
          <h2 className="text-center">Featured Properties</h2>
          <div className="row mt-4">
            {featuredProperties.map((property) => (
              <div className="col-md-4" key={property.id}>
                <div className="card">
                  <img
                    src={propertyImages[property.picture]} // Replace with your image path
                    className="card-img-top"
                    style={{height:"200px"}}
                    alt={property.type}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.type}</h5>
                    <p className="card-text h-50">
                      Location: {property.location}
                      <br />
                      Price: ${property.price.toLocaleString()}
                    </p>
                    <Link to={`/${property.url}`} className="btn btn-primary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="search-section py-5 bg-light mx-5 mb-5 rounded">
        <div className="container">
          <h2 className="text-center mb-5">Search Properties</h2>
          <p className="text-center">Find the perfect property based on your preferences.</p>
          <div className="text-center mt-4">
            <Link to="/properties" className="btn btn-primary btn-lg">Start Searching</Link>
          </div>
        </div>
      </section>
      <section className="about-section py-5 bg-light mx-5 mb-5 rounded">
        <div className="container">
          <h2 className="text-center mb-5">About Home Dreams</h2>
          <p className="text-center">
            At Property Finder, we help you find the perfect property to suit your needs. Whether you're looking for a new home, an investment property, or a vacation getaway, our extensive listings and user-friendly interface make it easy to explore your options.
          </p>
        </div>
      </section>
      <section className="contact-section py-5 mx-5 mb-5 rounded ">
        <div className="container">
          <h2 className="text-center mb-5">Contact Us</h2>
          <p className="text-center">Have questions? We're here to help!</p>
          <div className="text-center mt-4">
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
    
    
  );
};

export default HomePage;
