import "./App.css";
import { FaHospitalSymbol } from "react-icons/fa";
import { NavLink, Routes, Route } from "react-router-dom";
import Patients from "./pages/patients/Patients";
import Ward from "./pages/wards/Ward";
import PatientDetail from "./pages/patientDetail/PatientDetail";
import WardDetail from "./pages/wardDetail/WardDetail";
import Hospital from "./pages/hospital/Hospital";
import Footer from "./common/Footer";
function App() {
  const style = ({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "#002884" : "black",
    };
  };
  return (
    <>
      <div className="App">
        <nav className="nav">
          <h3 className="patient-heading">
            <NavLink
              to="/"
              style={{ ...style, color: "#002884", textDecoration: "none" }}
            >
              Patient Management System
            </NavLink>
          </h3>
          <NavLink to="/" style={{ ...style, color: "#002884" }}>
            <FaHospitalSymbol size={30} className="hospital-icon" />
          </NavLink>
          <div className="navigations">
            <NavLink to="/" style={style}>
              Patient
            </NavLink>
            <NavLink to="/ward" style={style}>
              Ward
            </NavLink>
            <NavLink to="/hospital" style={style}>
              Hospital
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Patients />} />
          <Route path="/ward" element={<Ward />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/patient/:id" element={<PatientDetail />} />
          <Route path="/ward/:id" element={<WardDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
