import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
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
const PropertyCard = ({ property, onFavorite,isFavorited }) => {
  return (
    // <div className="col-md-4 mb-4 p-5 bg-secondary">
    //   <div className="card">
    //     <img src={propertyImages[property.picture]}  className="card-img-top" alt={`Image of ${property.type}`}/>
    //     <div className="card-body">
    //       <h5 className="card-title">{property.type}</h5>
    //       <p className="card-text">{property.description.substring(0, 100)}...</p>
    //       <p className="card-text"><strong>Price:</strong> £{property.price}</p>
    //       <p className="card-text"><strong>Location:</strong> {property.location}</p>
    //       <Link to={property.url} className="btn btn-primary">
    //         View Details
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div
      className="col-md-4 mb-4"
      draggable
      onDragStart={(e) => e.dataTransfer.setData('propertyId', property.id)}
    >
      <div className="card " >
        <img src={propertyImages[property.picture]} className="card-img-top " alt={`Image of ${property.type}`} style={{height:"200px"}} />
        <div className="card-body">
          <h5 className="card-title">{property.type}</h5>
          <p className="card-text">{property.description.substring(0, 100)}...</p>
          <p className="card-text"><strong>Price:</strong> £{property.price}</p>
          <p className="card-text"><strong>Location:</strong> {property.location}</p>
          <div className='d-flex justify-content-between'>
          <Link to={property.url} className="btn btn-primary">
             View Details
           </Link>
           <FaHeart
            className="text-danger align-self-end"
            style={{ cursor: 'pointer', fontSize: '1.5rem',color:isFavorited ?"red" :"black", }}
            onClick={() => onFavorite(property)}
            title="Add to Favorites"
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
