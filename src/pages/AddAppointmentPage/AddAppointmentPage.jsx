import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import backArrowIcon from "../../assets/icons/backarrow.svg";
import "../AddAppointmentPage/AddAppointmentPage.scss";
const {REACT_APP_API_URL} = process.env;
const apiUrl = "http://localhost:8080";

function AddAppointmentPage () {
    const navigate =useNavigate();

    //Change Handlers for all input fields

  const handleSubmit = async (event, fieldValues, validForm) => {
    event.preventDefault();

    if (validForm) {
      console.log(fieldValues);
        const response =await axios.post(
          `${REACT_APP_API_URL}/history/appointments`,
          {
            provider: fieldValues.Provider,
            reason:fieldValues.Reason,
            details: fieldValues.details,
            timestamp: new Date(fieldValues.date).toISOString(),
            
          }
        )
        alert("New appointment added successfully");
        navigate("/history/appointments");
      } else {
        alert("New appointment addition failed. Please try again");
      }
  }

return (
  <div className="newappt__wrapper">
    <div className="newappt__container">
      <div className="newappt__top">
    <Link to="/history/appointments">
            <button className="newappt__back-btn">
              <img src={backArrowIcon} />
            </button>
          </Link>
          <h3 className=" newappt__title">
            Add New Appointment
          </h3>
          </div>
          <AppointmentForm 
          handleCancel={() => navigate(`/`)} 
          handleSubmit={handleSubmit}
          id={false}/>
    </div>
   
 </div>  
);
}
export default AddAppointmentPage;