import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import backArrowIcon from "../../assets/icons/backarrow.svg";
import editIcon from "../../assets/icons/edit.svg";
import shareIcon from "../../assets/icons/share.svg";
import "../AppointmentSinglePage/AppointmentSinglePage.scss";
const {REACT_APP_API_URL} = process.env;

// const apiUrl = "http://localhost:8080";



   const ApptSinglePage =(props) => {
    const {id} = useParams();
  
    const [appt, setAppt] = useState([]);
    const [selectedAppt, setSelectedAppt] = useState({});
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/history/appointments/${id}/edit`);
      };

    useEffect(() => {
     
        const getSingleAppt = async (id) => {
            console.log(id);
            const response = await axios.get(
                `${REACT_APP_API_URL}/history/appointments/${id}` );
                const formattedData = {
                    ...response.data,
                    date: new Date(response.data.timestamp).toLocaleDateString()

                };
          
            setSelectedAppt(formattedData);
        }
        getSingleAppt(id);
      }, [id]);



    return (
        <div className="appt__wrapper">
           <div className="appt__container">
            <div className="appt__title-container">
              
                 <Link to="/history/appointments"><button className="appt__back-btn"><img src={backArrowIcon}/></button></Link>
                 <h3 className =" appt__title">Appointment with {selectedAppt.Provider}</h3> 
                </div>

          
             <div className="appt__share-btn-container">
             <button className="appt__share-btn"> <img src={shareIcon}/>Share</button>
             
             </div>
          


             <div className="appt__view">
                <div className="appt__view-btn-container">
                   <button className="appt__edit-btn" onClick={() => handleEdit(selectedAppt.id)}><img className ="appt__edit-btn-svg" src={editIcon} alt ="edit icon"/></button>
                </div>
                <ul className = "appt__view-list" key={selectedAppt.id}>
                    <li className="appt__view-listitem"><strong>Provider:</strong>{selectedAppt.Provider} </li>
                    <li className="appt__view-listitem"><strong>Reason:</strong>{selectedAppt.Reason} </li>
                    <li className="appt__view-listitem"><strong>Details:</strong>{selectedAppt.details} </li>
                    <li className="appt__view-listitem"><strong>Date:</strong>{selectedAppt.date} </li>
                </ul>
             </div>
      

        </div>
        </div>

    );
}

export default ApptSinglePage;