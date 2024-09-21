import './vendorPageCategory.css';
import VendorPageComponent from '../vendorPageComponent/VendorPageComponent';
import { vendorCategories } from '../../Data';

function VendorPageCategory() {

  return (
    <div className='vendorPageCategory'>
      {vendorCategories.map((vendor, index) => (
        <VendorPageComponent
          key={index}
          props={{
            categoryName: vendor.categoryName,
            categoryDescription: vendor.categoryDescription,
            paramVar: vendor.paramVar,
            image: vendor.image
          }}
        />
      ))}
    </div>
  );
}

export default VendorPageCategory;
