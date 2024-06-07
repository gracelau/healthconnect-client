import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AppointmentsPage/AppointmentsPage.scss";
import editIcon from "../../assets/icons/edit.svg";
import delIcon from "../../assets/icons/delete.svg";



const apiUrl = "http://localhost:8080";



const getAllAppts = async (setAppts) => {
    try{
      // const response = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);
      const response = await axios.get(`${apiUrl}/history/appointments`);
      const formattedData = response.data.map(appt => ({
        ...appt,
        date: new Date(appt.timestamp).toLocaleDateString()
    }));
    setAppts(formattedData);
    
    }catch (error) {
    console.error("Error getting all appointments", error);
      }
   };



const Appts =() => {
    const [appts, setAppts] = useState([]);
    const [selectedAppt, setSelectedAppt] = useState({});
    const navigate = useNavigate();

    const handleRowClick = (id) => {
      navigate(`/history/appointments/${id}`);
  };
    // const handleEdit = (e,id) => {
    //   console.log("line40:",e)
    //   e.stopPropagation();
    //     navigate(`/history/appointments/${id}/edit`);
    //   };

    useEffect(() => {
        getAllAppts(setAppts);
      }, []);
   

    return (
        <div className="appts__wrapper">
            <div className="appts__container">
             <h3 className =" appts__title">Appointments</h3>
             <div className="appts__add-btn-container">
              <button className="appts__add-btn">Add</button>
             </div>

             <table className="appts__table">
                <thead>
                    
                    <tr className="appts__table-top-section">
                        <th>Provider</th>
                 
                        <th>Reason</th>
                   
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {appts.map(item=> 
                      <tr className="appts__row" key={item.id} onClick={() => handleRowClick( item.id)}>
                      <td>{item.Provider} </td>
                      <td>{item.Reason}</td>
                      <td>{item.date}</td> 
                      {/* <button className="appts__edit-btn" onClick={(e) => handleEdit(e, item.id)}><img className ="appts__edit-btn-svg" src={editIcon} alt ="edit icon"/></button> */}
                      {/* <button className="appts__delete-btn"><img className="appts__del-btn-svg" src ={delIcon} alt="delete icon"/></button> */}
                  </tr>
                 

                    )}
                  
                
                </tbody>
             </table>
            </div>


            
        </div>

    );
}

export default Appts;