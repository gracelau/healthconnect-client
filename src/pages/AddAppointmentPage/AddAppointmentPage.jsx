import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import backArrowIcon from "../../assets/icons/backarrow.svg";
import "../AddAppointmentPage/AddAppointmentPage.scss";
const {REACT_APP_API_URL} = process.env;
const apiUrl = "http://localhost:8080";

function AddAppointmentPage () {
    const [provider, setProvider] = useState("");
    const [reason, setReason ] = useState("");
    const [details, setDetails] = useState("");
    const [timestamp, setDate] = useState("");
    const  [formValid,SetValidForm]=useState(false);
    const [fieldErrors,setFieldErrors] = useState({});
    const navigate =useNavigate();

    //Change Handlers for all input fields

    const updateErrors = (fieldName, isError) => {
      const errors = { ...fieldErrors };
      errors[fieldName] = isError;
      setFieldErrors(errors);
      };

    const handleProviderChange = (event) => {
        setProvider(event.target.value);
        updateErrors("Provider", event.target.value === "");
    }

    const handleReasonChange = (event) => {
        setReason(event.target.value);
        updateErrors("Reason", event.target.value === "");

    }

    const handleDetailsChange = (event) => {
        setDetails(event.target.value);
        updateErrors("details", event.target.value === "");
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
        const d = new Date(event.target.value);
        updateErrors("timestamp", isNaN(d));
    }

   

  const handleSubmit = async (event) => {
    event.preventDefault();

     //Check if form fields are valid

     const isProviderValid = () => {
      if (provider.length < 4) {
        return false;
      }
  
      return true;
    }
  
    const isReasonValid = () => {
      if (reason.length < 5) {
        return false;
      }
      return true;
    }

    const isDetailsValid = () => {
      if (details.length < 5) {
        return false;
      }
      return true;
    }

    const isDateValid = () => {
      if (timestamp.length < 7) {
        return false;
      }
      return true;
    }

    // Check if the form fields are filled out

const isFormValid = () => {
  if (isProviderValid() && isReasonValid() && isDetailsValid() && isDateValid()) {
    return true;
  }else {
    return false
  }
}
console.log("submit")
    const response =await axios.post(
      `${REACT_APP_API_URL}/history/appointments`,
      {
        provider: event.target.Provider.value,
        reason:event.target.Reason.value,
        details: event.target.details.value,
        timestamp: new Date(event.target.date.value).toISOString(),
        
      }
    )
    if (isFormValid()) {
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
          <AppointmentForm handleProviderChange ={handleProviderChange} handleReasonChange ={handleReasonChange} handleDetailsChange={handleDetailsChange} handleDateChange={handleDateChange} handleSubmit={handleSubmit}/>
    </div>
   
 </div>  
);
}
export default AddAppointmentPage;