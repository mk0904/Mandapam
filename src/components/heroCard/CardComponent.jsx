import React from 'react';
import './CardComponent.css';
import { FaMapMarkerAlt, FaStar} from 'react-icons/fa';
        
function CardComponent({props}) {

  return (
    <div className='ComponentCard'>
      <div className='ComponentCardImage'>
        <img src={props.img} alt="Vendor" />
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
        <h3 className='ComponentCardPrice'>₹ {Intl.NumberFormat('en-IN').format(props.price)} <span className='spanPerDay'>per day</span></h3>
        <p className='ComponentCardDesc'>{props.desc}</p>
      </div>
    </div>
  );
}

export default CardComponent;
 