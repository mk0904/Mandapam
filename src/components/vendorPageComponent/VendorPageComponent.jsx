import './VendorPageComponent.css';

function VendorPageComponent({props}) {
  return (
    <div>
     <div className='categoryInfo'>
          <h1>{props.categoryName}</h1>
          <p>{props.categoryDescription}</p>
     </div>
     <div className="categoryBackgroundImage">
          <img src={props.image} alt="Category_Background_Image" />
     </div>
    </div>
  );
}

export default VendorPageComponent;