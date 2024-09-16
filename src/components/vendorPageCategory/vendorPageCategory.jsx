import './vendorPageCategory.css';
import VendorPageComponent from '../vendorPageComponent/VendorPageComponent';
import photographersImg from '../../images/3.jpeg';
import catererImg from '../../images/catering.webp';
import plannersanddecorators from '../../images/plannersadnddecorators.webp';
import mehendiartists from '../../images/mehendi artists.jpeg';
import bridalGrooming from '../../images/bridal grooming.jpeg';
import performanceartists from '../../images/performance artists.avif';
import panditimg from '../../images/pandits.avif';

function VendorPageCategory() {
  return (
    <div className='vendorPageCategory'>
      <VendorPageComponent props={{categoryName:'Photographers',categoryDescription:'Shot your bests', paramVar:'photographers', image:`${photographersImg}`}}/>
      <VendorPageComponent props={{categoryName:'Caterers',categoryDescription:'Get your guests the best servings', paramVar:'caterers',image:`${catererImg}`}}/>
      <VendorPageComponent props={{categoryName:'Planners & Decorators',categoryDescription:'Decorate your dream mandap', paramVar:'planninganddecorators',image:`${plannersanddecorators}`}}/>
      <VendorPageComponent props={{categoryName:'Mehendi Artists',categoryDescription:'Let your hand craft your love with henna', paramVar:'mehendiartists',image:`${mehendiartists}`}}/>
      <VendorPageComponent props={{categoryName:'Bridal Grooming',categoryDescription:'Brighten up Miss Bride', paramVar:'bridalgrooming',image:`${bridalGrooming}`}}/>
      <VendorPageComponent props={{categoryName:'DJs &  Performance Artists',categoryDescription:'The party beginsss !', paramVar:'performanceartists',image:`${performanceartists}`}}/>
      <VendorPageComponent props={{categoryName:'Pandits',categoryDescription:'Traditions meets devotion in every ritual...', paramVar:'pandits',image:`${panditimg}`}}/>
    </div>
  );
}

export default VendorPageCategory;