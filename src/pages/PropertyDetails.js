import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';
import { Tabs, Tab } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PropertyDetails = () => {
  const { id } = useParams();
  console.log("----", id);

  const property = propertiesData.properties.find((prop) => prop.id === id);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  if (!property) {
    return <p>Property not found!</p>;
  }
  const openModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage('');
  };
  return (

    <>
      <Header />
      <section className='mx-5'>
      <h1 className='mt-5'>{property.type}</h1>
      <p><strong>Price:</strong> £{property.price}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p>{property.description}</p>

      <div className='d-flex row'>
        <div className="col-12 col-md-6">

          <div className="mb-4">
            <img
              src={require(`../assests/img/${property.images[0]}`)}
              alt="Main property"
              className="img-fluid mb-3"
              onClick={() => openModal(property.images[0])}
            />
            <div className="d-flex flex-wrap">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={require(`../assests/img/${image}`)}
                  alt={`Thumbnail ${index + 1}`}
                  className="img-thumbnail me-2"
                  style={{ maxWidth: '100px', cursor: 'pointer' }}
                  onClick={() => openModal(image)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Tabs defaultActiveKey="description" id="property-tabs" className="mb-3">
            <Tab eventKey="description" title="Description">
              <p>{property.longDescription}</p>
            </Tab>
            <Tab eventKey="floorPlan" title="Floor Plan">
              <img
                src={require(`../assests/img/${property.floorPlan}`)}
                alt="Floor Plan"
                className="img-fluid"
              />
            </Tab>
            <Tab eventKey="map" title="Map">
              <iframe
                src={property.googleMapEmbed}
                title="Google Map"
                style={{ width: '100%', height: '300px', border: 'none' }}
              ></iframe>
            </Tab>
          </Tabs>


        </div>
      </div>
      </section>
      


      {/* Modal */}
      {showModal && (
        <div
          className="modal show"
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1050,
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={require(`../assests/img/${currentImage}`)}
                  alt="Modal View"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default PropertyDetails;
