import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import "../AddAppointmentPage/AddAppointmentPage.scss";
const {REACT_APP_API_URL} = process.env;
const apiUrl = "http://localhost:8080";

function AddAppointmentPage () {
    const [provider, setProvider] = useState("");
    const [reason, setReason ] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const navigate =useNavigate();

    //Change Handlers for all input fields

    const handleChangeProvider = (event) => {
        setProvider(event.target.value);
    }

    const handleChangeReason = (event) => {
        setReason(event.target.value);
    }

    const handleChangeDetails = (event) => {
        setDetails(event.target.value);
    }

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    }

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

      // Check if the form fields are filled out

  const isFormValid = () => {
    if (isProviderValid() && isReasonValid() && isDetailsValid()) {
      return true;
    }else {
      return false
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <AppointmentForm handleSubmit={handleSubmit}/>

);
}
export default AddAppointmentPage;