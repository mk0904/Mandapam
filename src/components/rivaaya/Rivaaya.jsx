import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Rivaaya.css";
import video from "../../images/rivaaya.mp4";

function Rivaaya() {
  // Calculate target date/time for countdown
  const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now

  const handleNotifyClick = () => {
    toast.success("You will be notified when Rivaaya launches!");
  };

  return (
    <section className="rivaaya">
      {/* Video background */}
      <video autoPlay loop className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="overlay">
        <h1>Rivaaya</h1>
        <h3>is launching soon..!!</h3>
        <FlipClockCountdown
          className='flip-clock'
          to={targetDate} // Set to targetDate
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="rivaayaNotifyButton" onClick={handleNotifyClick}>
          Notify Me
        </button>
      </div>

      {/* Toast container for notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </section>
  );
}

export default Rivaaya;
