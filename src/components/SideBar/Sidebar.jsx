import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import logoutIcon from "../../assets/icons/logout.svg";
import './SideBar.scss';



function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/"><img className="sidebar__logo" src={logo}/></NavLink>
      <h2 className="sidebar__title">Jane Smith</h2>
      <ul className="sidebar__nav">
      <li className="sidebar__link"><NavLink to="/" >Dashboard</NavLink></li> 
        <li className="sidebar__link"><NavLink to ="/history/appointments/new">+ Appointment</NavLink></li>
        <li className="sidebar__link">Symptom Tracker</li>
        <li className="sidebar__settings">Settings</li>
        <li className="sidebar__acct">Account</li>
        <li className="sidebar__logout"><img className="sidebar__logout-icon" src={logoutIcon} alt="logout icon"/>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;