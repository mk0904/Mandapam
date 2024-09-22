import "./Hero.css";
import DropdownCity from "../dropdown/Dropdown";
import heroBgm from "../../images/hero.jpg";
import EventDateSelector from "../calendar/Calendar";
import RoomAndVisitors from "../roomAndVisitors/roomAndVisitors";

function Hero() {

  return (
    <div className="heroplan">
        <div className="heroBgm">
          <img src={heroBgm} alt="hero" />
        </div>

        <div className="heroInput">
          <div className="heroTextBox">
            <h1 className="heroTitle">your perfect destination</h1>
            {/* <p className="heroText">the perfect destination with your destined one..</p> */}
          </div>
          <div className="heroInputDiv">
            <div className="dropDownDiv">
              <DropdownCity />
            </div>
            <div className="dateSelectorDiv">
              <EventDateSelector />
            </div>
            <div className="peopleAndRoomDiv">
              <RoomAndVisitors />
            </div>
          </div>
          <button className="buttonSearchResort">Find the best Resorts</button>
        </div>
    </div>
  );
}

export default Hero;
