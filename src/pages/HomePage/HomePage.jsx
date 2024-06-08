import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/SideBar/Sidebar";
import "../HomePage/HomePage.scss";





const HomePage = () => {

return (
    <div className="App">
      <div className="home__wrapper">
      <Sidebar/>
      <div className="home__container">
     
        <h3 className="home__title"> Health Overview</h3>

        <div className="home__chart">Placeholder for chart img</div>
        <div className="home__vitals-container">
          <div className="home__vitals-bloodpressure">
            <p className="home__vitals-content">Blood Pressure: 120/80 mmHg</p>
            <p className="home__vitals-content">Average Resting Heart Rate: 80 BPM</p>
          </div>
          </div>

          <div className="home__links-container">
            <h3 className="home__links-container-title">History</h3>
         <Link to="/history/appointments" className="home__link"><button className="home__history-btn">Appointments</button></Link>
         <Link to="/history/medications" className="home__link"><button className="home__tests-btn">Medications</button></Link>
         <Link to="/referrals" className="home__link"><button className="home__ref-btn">Referrals</button></Link>
            

          
        </div>
      </div>

      </div>
  
      
    </div>
  );
};

export default HomePage;