import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../HomePage/HomePage.scss";




const HomePage = () => {

return (
    <div className="App">
      <div className="home__wrapper">
      <div classsName="home__container">
        <h3 className="home__title"> Health Overview</h3>

        <div className="home__chart">Placeholder for chart img</div>
        <div className="home__vitals-container">
          <div className="home__vitals-bloodpressure">
            <p className="home__vitals-content">Blood Pressure: 120/80 mmHg</p>
            <p className="home__vitals-content">Average Resting Heart Rate: 80 BPM</p>
          </div>

          <div className="home__links-container">
         <Link to="/history" className="home__link"><button className="home__history-btn">History</button></Link>
         <Link to="/tests" className="home__link"><button className="home__tests-btn">Tests</button></Link>
         <Link to="/referrals" className="home__link"><button className="home__ref-btn">Referrals</button></Link>
            

          </div>
        </div>
      </div>

      </div>
  
      
    </div>
  );
};

export default HomePage;