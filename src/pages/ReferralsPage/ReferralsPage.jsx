import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../ReferralsPage/ReferralsPage.scss";
const {REACT_APP_API_URL} = process.env;




const getAllRefs = async (setRefs) => {
    try{
      // const response = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);
      const response = await axios.get(`${REACT_APP_API_URL}/referrals`);
      const formattedData = response.data.map(ref => ({
        ...ref,
        date: new Date(ref.timestamp).toLocaleDateString()
    }));
    setRefs(formattedData);
    
    }catch (error) {
    console.error("Error getting all referrals", error);
      }
   };



const Refs =() => {
    const [refs, setRefs] = useState([]);
    // const [selectedMed, setSelectedMed] = useState({});
    const navigate = useNavigate();

    // const handleEdit = (id) => {
    //     navigate(`/history/medications/${id}/edit`);
    //   };

    useEffect(() => {
        getAllRefs(setRefs);
      }, []);
   
    

    return (
        <div className="refs__wrapper">
            <div className="refs__container">
             <h3 className =" refs__title">Referrals</h3>

             <table className="refs__table">
                <thead>
                    
                    <tr className="refs__table-top-section">
                        <th>Name</th>
                 
                        <th>Specialization</th>
                   
                     
                    </tr>
                </thead>
                <tbody>
                    {refs.map(item=> 
                      <tr key= {item.id}>
                      <td>{item.Name} </td>
                     <td className="meds__row-border-none">{item.Specialization}</td> 
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

export default Refs;

