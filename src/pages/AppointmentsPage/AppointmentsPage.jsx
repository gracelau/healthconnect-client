import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AppointmentsPage/AppointmentsPage.scss";
import editIcon from "../../assets/icons/edit.svg";
import delIcon from "../../assets/icons/delete.svg";



const apiUrl = "http://localhost:8080";



const getAllAppts = async (setAppts) => {
    try{
    
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
    const [sortColumn, setSortColumn] = useState("date");
    const [sortDirection, setSortDirection] = useState("desc"); // asc / desc
    const navigate = useNavigate();

    const handleRowClick = (id) => {
      navigate(`/history/appointments/${id}`);
  };

  const toggleSort = (column) => {
    if (column !== sortColumn) {
      setSortColumn(column);
      setSortDirection("asc");
      return;
    }
    if (sortDirection === "desc") {
      setSortDirection("asc");
    } else {
      setSortDirection("desc");
    }
  };

  const sortedAppts = appts.toSorted((a, b) => {
    let diff;
    if (sortColumn === "date") {
      diff = new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    } else {
      diff = a[sortColumn].localeCompare(b[sortColumn]);
    }
    return sortDirection === "asc" ? diff : -diff;
  });

  const arrow = (sortDirection === "asc") ? '\u2191' : '\u2193';

    useEffect(() => {
        getAllAppts(setAppts);
      }, []);
   

    return (
        <div className="appts__wrapper">
            <div className="appts__container">
             <h3 className =" appts__title">Appointments</h3>
             {/* <div className="appts__add-btn-container">
              <button className="appts__add-btn">Add</button>
             </div> */}

             <table className="appts__table">
                <thead>
                    
                    <tr className="appts__table-top-section">
                        <th>
                          <span style={{ cursor: "pointer", userSelect: "none" }} onClick={() => toggleSort("Provider")}>
                            Provider {sortColumn === "Provider" ? arrow : ""}
                          </span>
                        </th>
                 
                        <th>
                          <span style={{ cursor: "pointer", userSelect: "none" }} onClick={() => toggleSort("Reason")}>
                            Reason {sortColumn === "Reason" ? arrow : ""}
                          </span>
                        </th>
                   
                        <th>
                            <span style={{ cursor: "pointer", userSelect: "none" }} onClick={() => toggleSort("date")}>
                            Date {sortColumn === "date" ? arrow : ""}
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedAppts.map(item=> 
                      <tr className="appts__row" key={item.id} onClick={() => handleRowClick( item.id)}>
                      <td>{item.Provider} </td>
                      <td>{item.Reason}</td>
                      <td className="appts__row-border-none">{item.date}</td> 
                      
                  </tr>
                 

                    )}
                  
                
                </tbody>
             </table>
            </div>


            
        </div>

    );
}

export default Appts;