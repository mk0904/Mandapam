import PackagesCard from "../packagesCard/PackagesCard";
import "./PlanYourWedding.css";
import heroBgm from "../../images/planyourwedding.jpg";
import {basicPackage, standardPackage, premiumPackage} from '../Data'

function PlanYourWedding() {

  return (
    <div className="hero">
     <div className="Bgm">
          <img src={heroBgm} alt="hero" />
        </div>

      
      <div className="cardContainer">
          <h1>Plan Your Wedding</h1>
          <div className="cardContainerDiv">
               <PackagesCard props={basicPackage} />
               <PackagesCard props={standardPackage} />
               <PackagesCard props={premiumPackage} />
          </div>
      </div>
    </div>
  );
}

export default PlanYourWedding;
