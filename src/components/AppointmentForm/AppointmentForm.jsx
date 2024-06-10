import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AppointmentForm.scss";
const {REACT_APP_API_URL} = process.env;


function AppointmentForm ( {handleCancel, handleSubmit, id}) {
   const navigate = useNavigate();
   
   const [provider,setProvider] =useState("");
   const [reason, setReason]= useState("");
   const [details, setDetails] = useState("");
   const [date, setDate] = useState("");
   const [fieldErrors,setFieldErrors] = useState({});
   const [validForm, setValidForm] = useState(false);
// console.log(REACT_APP_API_URL);
    useEffect(() => {
        if (id) {
            async function getAppointment () {
                try {
                    const response = await axios.get(
                        `${REACT_APP_API_URL}/history/appointments/${id}`
                    );

                    // console.log(response);
                   const formattedDate = new Date(response.data.timestamp).toLocaleDateString()
                    setProvider(response.data.Provider)
                    setReason(response.data.Reason)
                    setDetails(response.data.details)
                    setDate(formattedDate)
                    setValidForm(true);
                }catch (err) {
                    console.error("GET request to /history/appointments/:id failed:", err);
                }
            } 
            getAppointment();
        } else {
          setFieldErrors({ "Provider": true, "Reason": true, "details": true, "date": true });
          setValidForm(false);
        }
       
    }, []);

const updateErrors = (fieldName, isError) => {
const errors = { ...fieldErrors };
errors[fieldName] = isError;
setFieldErrors(errors);
if (Object.keys(errors).find(fieldName => errors[fieldName] === true)) {
  setValidForm(false);
} else {
  setValidForm(true);
}
};

const handleProviderChange = (e) =>{
  setProvider(e.target.value);
  updateErrors("Provider", e.target.value === "");


 }

const handleReasonChange = (e) =>{
  setReason(e.target.value);
  updateErrors("Reason", e.target.value === "");
}

const handleDetailsChange = (e) =>{
  setDetails(e.target.value);
  updateErrors("details", e.target.value === "");
}

const handleDateChange = (e) =>{
  setDate(e.target.value);
  const d = new Date(e.target.value);
  updateErrors("date", isNaN(d));
}

// const handleFormSubmit = (e) => {
//   e.preventDefault();
//   const errors = [];
//   Object.keys(fieldErrors).forEach(fieldName => {
//     if (fieldErrors[fieldName]) {
//       errors.push(fieldName);
//     }
//   });
//   if (errors.length > 0) {
//     window.alert(`The following fields are invalid: ${errors.join(", ")}`);
//   } else {
//     handleSubmit(e, { Provider: provider, Reason: reason, details, date }, validForm);
//   }
// };




return (
    <form className="appt__form"
    onSubmit={(e) => {
      e.preventDefault();
      const errors = [];
      Object.keys(fieldErrors).forEach(fieldName => {
        if (fieldErrors[fieldName]) {
          errors.push(fieldName);
        }
      });
      if (errors.length > 0) {
        window.alert(`The following fields are invalid: ${errors.join(", ")}`);
      } else {
        handleSubmit(e, { Provider: provider, Reason: reason, details, date }, validForm);
      }
    }}>
        <div className ="appt__form-container">

        <div className="appt__form-field-group">
        <label className="appt__form-field-label" htmlFor="name">
            Provider:
          </label>
          <input
            type="text"
            id="Provider"
            name="Provider"
            placeholder="Provider Name"
            className={`appt__form__input ${
              fieldErrors.Provider? "appt__form__input--error" : ""
            }
        `}
            value={provider}
            onInput={handleProviderChange }
          />
            


        </div>


        <div className="appt__form-field-group">
        <label className="appt__form-field-label" htmlFor="name">
            Reason:
          </label>
          <input
            type="text"
            id="Reason"
            name="Reason"
            placeholder="Reason"
            className={`appt__form__input ${
              fieldErrors.Reason? "appt__form__input--error" : ""
            }
        `}
            value={reason}
            onInput={handleReasonChange}
          />
            


        </div>
        <div className="appt__form-field-group">
        <label className="appt__form-field-label" htmlFor="name">
            Details:
          </label>
          <textarea
            type="text"
            id="details"
            name="details"
            placeholder="Please fill in any relevant details pertaining to appointment."
            className={`appt__form__input-details ${
              fieldErrors.details? "appt__form__input--error" : ""
            }
        `}
            value={details}
            onInput={handleDetailsChange}
          />
            
        </div>

        <div className="appt__form-field-group">
        <label className="appt__form-field-label" htmlFor="name">
            Date:
          </label>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="M/D/YYYY"
            className={`appt__form__input ${
              fieldErrors.date? "appt__form__input--error" : ""
            }
        `}
            value={date}
            onInput={handleDateChange}
          />
            


        </div>

       <div className = "appt__form-btn-group">
        <button className="appt__form-btn-cancel" onClick={() => handleCancel()}>Cancel</button>
        <button className="appt__form-btn-save" type = "submit"> {id ? "Save" : " + Add Appointment"}</button>

       </div>

        </div>




    </form>
)

}
export default AppointmentForm;