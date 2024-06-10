import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentsPage";
import AddAppointmentPage from "./pages/AddAppointmentPage/AddAppointmentPage";
import AppointmentSinglePage from "./pages/AppointmentSinglePage/AppointmentSinglePage";
import EditAppointmentPage from "./pages/EditAppointmentPage/EditAppointmentPage";
import MedicationsPage from "./pages/MedicationsPage/MedicationsPage";
import ReferralsPage from "./pages/ReferralsPage/ReferralsPage";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
    {/* <Header/> */}
  
      <div className="App">
    <Routes>
      <Route path="/" element = {<HomePage/>} />
      <Route path="/history" element = {<HistoryPage/>} />
      <Route path="/history/appointments" element = {<AppointmentsPage/>} />
      <Route path="/history/appointments/new" element = {<AddAppointmentPage/>} />
      <Route path="/history/appointments/:id" element = {<AppointmentSinglePage/>} />
      <Route path="/history/appointments/:id/edit" element = {<EditAppointmentPage/>} />
      <Route path="/history/medications" element = {<MedicationsPage/>} />
      <Route path="/referrals" element = {<ReferralsPage/>} />
      {/* <Route path="/settings" element = {<SettingsPage/>} /> */}
      
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
