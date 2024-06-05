import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentsPage";
import AppointmentSinglePage from "./pages/AppointmentSinglePage/AppointmentSinglePage";
import ReferralsPage from "./pages/ReferralsPage/ReferralsPage";

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Nav/>
      <div className="App">
    <Routes>
      <Route path="/" element = {<HomePage/>} />
      <Route path="/history" element = {<HistoryPage/>} />
      <Route path="/history/appointments" element = {<AppointmentsPage/>} />
      <Route path="/history/appointments/:id" element = {<AppointmentSinglePage/>} />
      {/* <Route path="/history/medications" element = {<MedicationsPage/>} /> */}
      <Route path="/referrals" element = {<ReferralsPage/>} />
      {/* <Route path="/settings" element = {<SettingsPage/>} /> */}
      
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
