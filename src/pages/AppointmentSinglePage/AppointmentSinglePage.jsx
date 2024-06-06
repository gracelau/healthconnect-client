import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import backArrowIcon from "../../assets/icons/backarrow.svg";
import editIcon from "../../assets/icons/edit.svg";
import delIcon from "../../assets/icons/delete.svg";
import "../AppointmentSinglePage/AppointmentSinglePage.scss";


const apiUrl = "http://localhost:8080";

// const ApptSinglePage= (props)=> {
 
   

// const getAppt = async (setAppt) => {
//     try{
//       // const response = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);
//       const response = await axios.get(`${apiUrl}/history/appointments/${apptId}`);
//       const formattedData = response.data.map(appt => ({
//         ...appt,
//         date: new Date(appt.timestamp).toLocaleDateString()
//     }));
//     setAppt(formattedData);
    
//     }catch (error) {
//     console.error("Error getting single appointment", error);
//       }
//    };

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
                `${apiUrl}/history/appointments/${id}` );
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
          
             <div className="appt__add-btn-container">
              <button className="appt__share-btn">Share</button>
              <button className="appt__edit-btn" onClick={() => handleEdit(selectedAppt.id)}><img className ="appt__edit-btn-svg" src={editIcon} alt ="edit icon"/></button>
             </div>
             {/* <div className="appt__view">
                <thead>
                    
                    <tr className="appt__table-top-section">
                        <th>Provider</th>
                         <th>Reason</th>
                         <th>Details</th>
                         <th>Date</th>
                    </tr>
                </thead>
                <tbody>
             
                      <tr key= {selectedAppt.id}>
                      <td>{selectedAppt.Provider} </td>
                      <td>{selectedAppt.Reason}</td>
                      <td>{selectedAppt.details}</td>
                      <td>{selectedAppt.date}</td> <button className="appt__edit-btn" onClick={() => handleEdit(selectedAppt.id)}><img className ="appt__edit-btn-svg" src={editIcon} alt ="edit icon"/></button>
                      <button className="appt__delete-btn"><img className="appt__del-btn-svg" src ={delIcon} alt="delete icon"/></button>
                  </tr>
                 

                   
                  
                
                </tbody>
             </div> */}


             <div className="appt__view">
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