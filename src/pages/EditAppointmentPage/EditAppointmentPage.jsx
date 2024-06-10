import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import backArrowIcon from "../../assets/icons/backarrow.svg";
import shareIcon from "../../assets/icons/share.svg";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import "../EditAppointmentPage/EditAppointmentPage.scss";

const apiUrl = "http://localhost:8080";

const EditAppointmentPage = () => {
  const { REACT_APP_API_URL } = process.env;
  const { id } = useParams();
  const [appt, setAppt] = useState([]);
  const [selectedAppt, setSelectedAppt] = useState({});
  const navigate = useNavigate();



  const editSingleAppt = async (e, fieldValues, validForm) => {
    e.preventDefault();

    if (!validForm) return;
    const formattedFieldValues = {
      Provider: fieldValues.Provider,
      Reason: fieldValues.Reason,
      details: fieldValues.details,
      timestamp: new Date(fieldValues.date).toISOString(),
    };
    try {
      const response = await axios.put(
        `${apiUrl}/history/appointments/${id}`,
        formattedFieldValues);
        if (response.status === 200) {
            navigate(`/history/appointments/${id}`);
      }else {
        console.error("request failed");  
      }
    } catch (err) {
      return console.error("PUT request failed:", err);
    }
  };

  return (
    <div className="appt__wrapper">
      <div className="appt__container">
        <div className="appt__title-container">
          <Link to="/history/appointments">
            <button className="appt__back-btn">
              <img src={backArrowIcon} />
            </button>
          </Link>
          <h3 className=" appt__title">
           Edit Appointment
          </h3>
        </div>

        <div className="appt__share-btn-container">
          <button className="appt__share-btn"> <img src={shareIcon}/>Share</button>
         </div>
        <AppointmentForm 
        handleCancel={() => navigate(`/history/appointments/${id}`)}
        handleSubmit={editSingleAppt} id={id} />
      </div>
    </div>
  );
};

export default EditAppointmentPage;
