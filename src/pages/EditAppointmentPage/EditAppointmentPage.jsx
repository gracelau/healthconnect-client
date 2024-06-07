import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import backArrowIcon from "../../assets/icons/backarrow.svg";
import editIcon from "../../assets/icons/edit.svg";
import delIcon from "../../assets/icons/delete.svg";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm"; 
import "../AppointmentSinglePage/AppointmentSinglePage.scss";


const apiUrl = "http://localhost:8080";



   const EditAppointmentPage =() => {
    const {REACT_APP_API_URL} = process.env;
    const {id} = useParams();
  
    const [appt, setAppt] = useState([]);
    const [selectedAppt, setSelectedAppt] = useState({});
    const navigate = useNavigate();

    // const handleEdit = (id) => {
    //     navigate(`/history/appointments/${id}/edit`);
    //   };

  
    
        const editSingleAppt = async (e,fieldValues,validForm) => {
            e.preventDefault();
           
            if(!validForm) return;
            const formattedFieldValues = {
                Provider: fieldValues.Provider,
                Reason: fieldValues.Reason,
                Details: fieldValues.details,
                Date: fieldValues.date,
            };
            try{
                const response = await axios.put(
                `${apiUrl}/history/appointments/${id}`, formattedFieldValues );
                const formattedData = {
                    ...response.data,
                    date: new Date(response.data.timestamp).toLocaleDateString()}
                    
            } catch (err) {
                return console.error("PUT request failed:", err);

            }
           
       
                };
            
      
     



    return (
        <div className="appt__wrapper">
           <div className="appt__container">
            <div className="appt__title-container">
              
                 <Link to="/history/appointments"><button className="appt__back-btn"><img src={backArrowIcon}/></button></Link>
                 <h3 className =" appt__title">Appointment with {selectedAppt.Provider}</h3> 
                </div>
          
             <div className="appt__add-btn-container">
              <button className="appt__share-btn">Share</button>
              {/* <button className="appt__edit-btn" onClick={() => handleEdit(selectedAppt.id)}><img className ="appt__edit-btn-svg" src={editIcon} alt ="edit icon"/></button> */}
             </div>
   

             {/* <form className="appt__form">             
             <div className="appt__view">
                <ul className = "appt__view-list" key={selectedAppt.id}>
                    <li className="appt__view-listitem"><strong>Provider:</strong>{selectedAppt.Provider} </li>
                    <li className="appt__view-listitem"><strong>Reason:</strong>{selectedAppt.Reason} </li>
                    <li className="appt__view-listitem"><strong>Details:</strong>{selectedAppt.details} </li>
                    <li className="appt__view-listitem"><strong>Date:</strong>{selectedAppt.date} </li>
                </ul>
             </div>
             </form> */}
               <AppointmentForm handleSubmit={editSingleAppt} id={id}/>
        </div>
        </div>

    );
}

export default EditAppointmentPage;