import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"
import "../../pages/HistoryPage/HistoryPage.scss";



function History () {
    
 

    return (
        <div className="his__wrapper">
            <div className = "his__container">
                <h3 className="his__title">History</h3>

                <div className="his__btns-container">
                <Link to="/history/appointments" className="his__link"><button className ="his__btn">Appointments </button></Link>
                  <Link to="/history/medications"className="his__link"> <button className = "his__btn"> Medications</button></Link>
                </div>
            </div>

        </div>
        
        

    );
}

export default History;