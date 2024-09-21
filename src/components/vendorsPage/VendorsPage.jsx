import './VendorsPage.css';
import VendorPageCategory from '../vendorPageCategory/vendorPageCategory';
import CardComponent from '../heroCard/CardComponent';

function VendorsPage() {
  return (
    <div className='heroNested'>
        <VendorPageCategory />
    </div>
  );
}

export default VendorsPage;