import React from 'react';
import './CardComponent.css';
import { FaMapMarkerAlt, FaStar} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
        
function CardComponent({props}) {
const navigate = useNavigate();
    // Function to handle card click
    const handleCardClick = () => {
      if(props.vendors == true){
      navigate(`/vendors/${props.category}/${props.id}`); // Navigate to the detail page with resort data
    }else{
      navigate(`/resorts/${props.id}`); // Navigate to the detail page with resort data
    }}
  
  return (
    
    <div className='ComponentCard' onClick={handleCardClick}>
      <div className='ComponentCardImage'>
        <img src={props.img[0]} alt="Vendor" />
      </div>
      <div className='ComponentCardInfo'>
        <div className='ComponentCardHeader'>
          <h1>{props.name}</h1>
          <div className='ratingDiv'>
            <FaStar className='starIcon' />
            <h4>{props.rating}</h4>
          </div>
        </div>
        <div className='ComponentCardLocation'>
          <FaMapMarkerAlt className='locationIcon' />
          <span>{props.location}</span>
        </div>
        {props.vegprice && props.nonvegprice ? (
          <div className='pricesDish'>
            <h3 className='veg'>₹ {props.vegprice} <span className='spanPerDay'>per plate</span></h3>
            <h3 className='nonveg'>₹ {props.nonvegprice} <span className='spanPerDay'>per plate</span></h3>
          </div>
        ):(
          <h3 className='ComponentCardPrice'>₹ {Intl.NumberFormat('en-IN').format(props.price)} <span className='spanPerDay'>per day</span></h3>
        )}
        {props.guests && props.rooms ? (
          <div className='guestsandrooms'>
            <h3 className='rooms'>{props.rooms}<span className='spanPerDay'> Rooms</span></h3>
            <h3 className='guests'>{props.guests}<span className='spanPerDay'> Guests</span></h3>
          </div>
        ):(
          <p className='ComponentCardDesc'>{props.desc}</p>
        )}
      </div>
    </div>
  );
}

export default CardComponent;
 