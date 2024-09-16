import './VendorsPage.css';
import VendorPageCategory from '../vendorPageCategory/vendorPageCategory';

function VendorsPage() {
  return (
    <div className='heroNested'>
      {/* <div className='heroNested'></div> */}
        <VendorPageCategory />
    </div>
  );
}

export default VendorsPage;