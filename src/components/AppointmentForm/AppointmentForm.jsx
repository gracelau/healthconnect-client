import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AppointmentForm.scss";
 const {REACT_APP_API_URL} = process.env;

 const apiUrl = "http://localhost:8080";
function AppointmentForm ( {handleSubmit, id}) {
   
    const navigate = useNavigate();
    
    const initialFields = {
        Provider:"",
        Reason:"",
        details:"",
        date:"",
    };


    // const [fields, setFields]= useState(initialFields);
    const [provider,setProvider] =useState("");
    const [reason, setReason]= useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [fieldErrors,setFieldErrors] = useState(initialFields);

    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        if (id) {
            async function getAppointment () {
                try {
                    const response = await axios.get(
                        `${apiUrl}/history/appointments/${id}`
                    );

                    console.log(response);
                   
                   //Get data from server to populate form fields
                    // setFields ({
                    //     Provider: response.data.Provider,
                    //     Reason: response.data.Reason,
                    //     details: response.data.details,
                    //     date: new Date(response.data.timestamp).toLocaleDateString()


                    // });
                    const formattedDate = new Date(response.data.timestamp).toLocaleDateString()
                    setProvider(response.data.Provider)
                    setReason(response.data.Reason)
                    setDetails(response.data.details)
                    setDate(formattedDate)

                    // set errors to false after form field population
                    // setFieldErrors({
                        
                    //     Provider:false,
                    //     Reason: false,
                    //     details: false,
                    //     date: false,
                    // });
                }catch (err) {
                    console.error("GET request to /history/appointments/:id failed:", err);
                }
            } 
            getAppointment();
        }
       
    }, []);

    // useEffect(()=> {
    //     setValidForm(Object.values(fieldErrors).every((error)=> error ===false));
    // }, [fieldErrors]);
    
//    function  handleFieldChange(e) {
//     const { Provider, Reason, details, date, value } = e.target;
// console.log(value);
// console.log(fields);
// console.log("e.target", e.target);
    
//     //Error handling for invalid New Appointment form submissions
     
//      //Check if form fields are empty
//      if (value ==="") {
//         setFieldErrors({
//             ...fieldErrors,
//             [Provider]: true,
//             [Reason]: true,
//             [details]: true,
//             [date]:true,
//         });

//      }else {
//         setFieldErrors({
//             ...fieldErrors,
//             [Provider]: false,
//             [Reason]: false,
//             [details]: false,
//             [date]:false,
//         });
//      }

//      setFields ({
//         ...fields,
//         [Provider]: value,
//         [Reason]: value,
//         [details]: value,
//         [date]:value,
//      });
//     }
const handleProviderChange = (e) =>{
  setProvider(e.target.value)

  if (e.target.value ==="") {
            setFieldErrors({
                ...fieldErrors,
                [provider]: true,})
}
 }

const handleReasonChange = (e) =>{
  setReason(e.target.value)
}

const handleDetailsChange = (e) =>{
  setDetails(e.target.value)
}

const handleDateChange = (e) =>{
  setDate(e.target.value)
}




return (
    <form className="appt__form"
    onSubmit={(e)=> handleSubmit(e,validForm)}>
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
            className={`appt__form__input ${
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
            placeholder="Date"
            className={`appt__form__input ${
              fieldErrors.date? "appt__form__input--error" : ""
            }
        `}
            value={date}
            onInput={handleDateChange}
          />
            


        </div>

       <div className = "appt__form-btn-group">
        <button className="appt__form-btn-cancel" onClick ={() => navigate(`${REACT_APP_API_URL}/history/appointments/${id} || ""}`)}>Cancel</button>
        <button className="appt__form-btn-save" type = "submit"> {id ? "Save" : " + Add Appointment"}</button>

       </div>

        </div>




    </form>
)

}
export default AppointmentForm;