import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../MedicationsPage/MedicationsPage.scss";
const {REACT_APP_API_URL} = process.env;




const getAllMeds = async (setMeds) => {
    try{
      // const response = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);
      const response = await axios.get(`${REACT_APP_API_URL}/history/medications`);
      const formattedData = response.data.map(med => ({
        ...med,
        Date: new Date(med.Date).toLocaleDateString()
    }));
    setMeds(formattedData);
    
    }catch (error) {
    console.error("Error getting all medications", error);
      }
   };



const Meds =() => {
    const [meds, setMeds] = useState([]);
    // const [selectedMed, setSelectedMed] = useState({});
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/history/medications/${id}/edit`);
      };

    useEffect(() => {
        getAllMeds(setMeds);
      }, []);
   
    

    return (
        <div className="meds__wrapper">
            <div className="meds__container">
             <h3 className =" meds__title">Medications</h3>

             <table className="meds__table">
                <thead>
                    
                    <tr className="meds__table-top-section">
                        <th>Name</th>
                 
                        <th>DIN</th>
                   
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {meds.map(item=> 
                      <tr key= {item.id}>
                      <td>{item.Name} </td>
                      <td>{item.DIN}</td>
                      <td className="meds__row-border-none">{item.Date}</td> 
                      {/* <button className="appts__edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
                      <button className="meds__delete-btn">Delete</button> */}
                  </tr>
                 

                    )}
                  
                
                </tbody>
             </table>
            </div>


            
        </div>

    );
}

export default Meds;