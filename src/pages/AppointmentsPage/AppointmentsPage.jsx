import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AppointmentsPage/AppointmentsPage.scss";



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

    const handleEdit = (id) => {
        navigate(`/history/appointments/${id}/edit`);
      };

    useEffect(() => {
        getAllAppts(setAppts);
      }, []);
   

    return (
        <div className="appts__wrapper">
            <div className="appts__container">
             <h3 className =" appts__title">Appointments</h3>

             <table className="appts__table">
                <thead>
                    
                    <tr>
                        <th>Provider</th>
                 
                        <th>Reason</th>
                   
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {appts.map(item=> 
                      <tr key= {item.id}>
                      <td>{item.Provider} </td>
                      <td>{item.Reason}</td>
                      <td>{item.date}</td> <button className="appts__edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
                      <button className="appts__delete-btn">Delete</button>
                  </tr>
                 

                    )}
                  
                
                </tbody>
             </table>
            </div>


            
        </div>

    );
}

export default Appts;