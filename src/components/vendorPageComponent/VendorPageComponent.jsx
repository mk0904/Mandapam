import './VendorPageComponent.css';
import { NavLink } from 'react-router-dom';

function VendorPageComponent({props}) {
  return (
    <NavLink to={`${props.paramVar}`}>
      <div className='vendorPageComponent' style={{backgroundColor:`${props.background}`}}>
        <div className='categoryInfo'>
              <h1>{props.categoryName}</h1>
              <p>{props.categoryDescription}</p>
        </div>
        <div className="categoryBackgroundImage">
              <img src={props.image} alt="Category_Background_Image" />
        </div>
      </div>
    </NavLink>
  );
}

export default VendorPageComponent;