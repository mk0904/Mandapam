import './vendorPageCategory.css';
import VendorPageComponent from '../vendorPageComponent/VendorPageComponent';

function VendorPageCategory() {
  return (
    <div>
     <VendorPageComponent props={{categoryName:'Photographers',categoryDescription:'Shot your bests'}}/>
    </div>
  );
}

export default VendorPageCategory;