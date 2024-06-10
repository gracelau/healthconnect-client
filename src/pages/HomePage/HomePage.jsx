import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/SideBar/Sidebar";
import historyImage from "../../assets/historyimage.png";
import "../HomePage/HomePage.scss";

const HomePage = () => {
  return (
    <div className="App">
      <div className="home__wrapper">
        <Sidebar />
        <div className="home__container">
          <h3 className="home__title"> Health Overview</h3>

          <div className="home__sections-wrapper">
            <div className="home__middle-container">
              <div className="home__vitals-container">
                <div className="home__vitals-wrapper">
                  <h4 className="home__vitals-title">My Vitals</h4>
                </div>
                {/* end home vitals wrapper */}
                <div className="home__vitals-group">
                  <div className="home__vitals-section">
                    <h4 className="home__vitals-subtitle"> Blood Pressure</h4>
                    <p className="home__vitals-content">120/80 mmHg</p>
                  </div>

                  <div className="home__vitals-section">
                    <h4 className="home__vitals-subtitle">
                      Average Resting Heart Rate
                    </h4>
                    <p className="home__vitals-content"> 80 BPM</p>
                  </div>

                  <div className="home__vitals-section">
                    <h4 className="home__vitals-subtitle">Blood Type</h4>
                    <p className="home__vitals-content"> A</p>
                  </div>
                </div>
                {/* end home vitals group div */}
              </div>
              {/* end home vitals container div */}

              <div className="home__links-container">
                <h3 className="home__links-container-title">History</h3>
                <div className="home__links-container-image-cont">
                  <img
                    className="home__links-container-img"
                    src={historyImage}
                    alt="medical symbols"
                  />
                </div>
                <div className="home__links-container-group">
                  <Link to="/history/appointments" className="home__link">
                    <button className="home__history-btn">Appointments</button>
                  </Link>
                  <Link to="/history/medications" className="home__link">
                    <button className="home__tests-btn">Medications</button>
                  </Link>
                  <Link to="/referrals" className="home__link">
                    <button className="home__ref-btn">Referrals</button>
                  </Link>
                </div>
              </div>
              {/* end home links container div */}
            </div>
            {/* end home middle wrapper div */}

            <div className="home__vitals-reminders">
              <h4 className="home__vitals-reminders-subtitle">Reminders</h4>
              <div className="home__vitals-reminders-card">
                Fill Prescription for Doxycycline
              </div>
              <div className="home__vitals-reminders-card">
                Phone Appointment with Dr. Jansen
              </div>

              <div className="home__vitals-reminders-card">
                Physical Exam with Dr. Smith
              </div>

              <div className="home__vitals-reminders-card">
                Follow-up appointment with Dr. Davis- Dermatologist
              </div>
              <div className="home__vitals-reminders-card">
                Allergy Test with Dr. Jacobs
              </div>
            </div>
            {/* end home vitals reminders container */}
          </div>
          {/* end home sections-wrapper div */}
        </div>
        {/* end home container div */}
      </div>
    </div>
  );
};

export default HomePage;
