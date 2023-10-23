import "./App.css";
import { FaHospitalSymbol } from "react-icons/fa";
import { NavLink, Routes, Route } from "react-router-dom";
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
            <NavLink to="/teacher" style={style}>
              Ward
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<div>Testing</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
