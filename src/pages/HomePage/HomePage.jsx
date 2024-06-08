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
            <div className="home__vitals-section">
              <h4 className="home__vitals-subtitle"> Blood Pressure</h4>
            <p className="home__vitals-content">120/80 mmHg</p>
            </div>
            </div>

            <div className="home__vitals-section">
              <h4 className="home__vitals-subtitle">Average Resting Heart Rate</h4>
            <p className="home__vitals-content"> 80 BPM</p>
            </div>

            <div className="home__vitals-section">
              <h4 className="home__vitals-subtitle">Blood Type</h4>
            <p className="home__vitals-content"> A</p>
            </div>
           
           

        
          </div>
        
          <div className="home__links-container">
            <h3 className="home__links-container-title">History</h3>
         <Link to="/history/appointments" className="home__link"><button className="home__history-btn">Appointments</button></Link>
         <Link to="/history/medications" className="home__link"><button className="home__tests-btn">Medications</button></Link>
         <Link to="/referrals" className="home__link"><button className="home__ref-btn">Referrals</button></Link>
        
       

          
        </div> 
        {/* end home links container div */}

        <div className ="home__vitals-reminders">
          <div className="home__vitals-reminders-card">
            Fill Prescription for Doxycycline
          </div>
          <div className="home__vitals-reminders-card">
            Phone Appointment with Dr. Jansen
          </div>

          <div className="home__vitals-reminders-card">
            Blood Test Requisition from Life Labs
          </div>
          
          
        </div>
        {/* end home vitals reminders container */}
      </div> 
      {/* end home container div */}
     

      </div>
  
      
    </div>
  );
};

export default HomePage;